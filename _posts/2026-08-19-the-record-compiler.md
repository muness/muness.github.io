---
title: "The Record Compiler"
date: 2026-08-19 15:15:00 -0400
author: muness
toc: true
comments: true
excerpt: "How we turned classifier spans and analyst-reviewed counterexamples into declarative record policy, compiled field writes, and replaceable code."
---

The record compiler starts with rows like these. The examples are synthetic: I changed the names, values, and source labels. The mess is representative.

```text
RECORD_NAME:    NORTHSTAR SERVICES LLC Sam B. Turner
GIVEN_NAME:     Sam
FAMILY_NAME:    Turner
MAIL_ADDRESS_1: 44 EXAMPLE ROAD APT 3
MAIL_ADDRESS_2: TORONTO ON M5V 2T6
RECORD_TYPE:    IND
```

```text
OWNER:          Sam B. Turner NORTHSTAR SERVICES LLC
ADDRESS:        44 Example Road
UNIT:           Apt 3
CITY:           Toronto
REGION:         ON
POSTAL:         M5V2T6
TYPE:           Individual
```

Both should produce:

```text
client_name:       Sam B. Turner
first_name:        Sam B.
last_name:         Turner
address_1:         44 Example Road
address_2:         Apt 3
city:              Toronto
region:            ON
postal_code:       M5V 2T6
registration_type: Individual
```

In the real input, hundreds of source layouts describe the same dozen-ish facts. Some give us one fact per column. Others jam names, organizations, addresses, record types, and relationships together. The work is to apply the business rules across a complete record without hiding those rules in code.

[Replacing the Implementation Without Losing the Decisions](/posts/replacing-the-implementation-without-losing-the-decisions/) makes the architectural argument for keeping approved decisions outside disposable implementations. This is the machinery we used.

We built the spike with [Counterexample-Supplemented Sketches](https://github.com/open-horizon-labs/counterexample-supplemented-sketches), or CESS. The Sketch holds the policy we have approved so far. Each accepted counterexample records a bad output, the correction, and the smallest general policy change that correction supports. We compile the current Sketch into a working classifier, query evaluator, and field-writing pipeline.

Every change to intended behavior entered through one of two paths:

- The Sketch already covered the record. We repaired or replaced the implementation.
- The Sketch did not cover the record. An analyst approved what the case was allowed to teach us, we changed the Sketch, and then we rebuilt.

We rejected patches that added a business rule to a handler just to make the current fixture pass.

## Compile records, not fields

We normalize a complete row at a time. A field-by-field cleaner cannot see that:

- an organization and a person share the name field;
- the middle initial missing from `GIVEN_NAME` is present in `RECORD_NAME`;
- the unit is stuck to the street address;
- the second address line contains the city, region, and postal code;
- `IND` describes the record rather than the person.

A name rule may need to update `client_name`, `first_name`, and `last_name` together. An address rule may consume text that must not remain available to a name rule. These are record transformations.

Source adapters first map each layout into a stable bag of fields. Everything after that boundary operates on the same record shape:

```text
source row
→ canonical field bag
→ semantic evidence
→ matched record policy
→ compiled field writes
→ normalized record and trace
```

The classifier does not write the normalized record. It supplies evidence to the policy layer.

## Start with a small Sketch

We did not try to describe every malformed record in the first Sketch. We wrote down four obligations:

1. Transform one complete record, never one isolated field.
2. Identify semantic roles before moving text.
3. Keep normalization policy out of imperative handlers.
4. Deny ambiguous writes or send the record for review.

It also fixed a few interfaces: the canonical record shape, the semantic span shape, the allowed transformation operations, and the output trace. We left everything else open so a coding agent could not invent policy for cases no analyst had reviewed.

## Keep regex out of semantic extraction

Our first extraction requirement was too loose. A coding agent wrote regex and string-splitting code that parsed raw field values, then assigned our semantic-role labels to the results. The output used classifier vocabulary, but regex had made the semantic decisions.

We tightened the Sketch. GLiNER, our span classifier, had to produce the Phase 1 semantic spans. Regex and string splitting could not assign roles from raw input. Post-processing could split an extracted GLiNER span into traceable child tokens or apply a named fallback rule, but it had to preserve where that evidence came from.

We compiled that obligation into AST checks in CI. The checks reject a projection that reintroduces regex or string splitting in the extraction path, even when its outputs satisfy the current regression cases.

Later we replaced GLiNER with GLiNER2. We updated the extraction requirement in the Sketch, regenerated the projection, and ran it against the existing record policy and accepted cases. We did not have to recover the normalization rules from the old extractor.

## Let the classifier find evidence

We use span classification for character ranges inside a field and whole-field classification when the complete value carries the useful signal.

For the first synthetic name field, span classification can return:

```text
field: client_name

text:   "NORTHSTAR SERVICES LLC"
range:  0..22
role:   source organization
source: classifier

text:   "Sam B. Turner"
range:  23..36
role:   person name
source: classifier
```

The query layer needs individual person tokens. Post-processing derives them from the raw person span:

```text
"Sam"     23..26   child of person span 23..36
"B."      27..29   child of person span 23..36
"Turner"  30..36   child of person span 23..36
```

We retain the raw span and the derived tokens. We also distinguish model output, phrase matches, and fallback rules. A bad normalized value can originate in several places:

- the classifier labeled the wrong text;
- tokenization split the span badly;
- a fallback inserted evidence it should not have inserted;
- the wrong policy matched;
- the compiler selected the wrong bound span;
- two writes conflicted.

Without provenance, all six failures look like “the model got the record wrong.” That does not tell an engineer what to fix or an analyst what to review.

Our semantic intermediate representation carries at least:

```text
field
start
end
text
semantic_role
score
source
parent_span
label_or_rule_id
```

The classifier can change as long as the replacement produces this evidence contract.

## Turn a failure into policy

Our first name failure was:

```text
client_name: NORTHSTAR SERVICES LLC Sam B. Turner
first_name:  Sam
last_name:   Turner
```

The approved output was:

```text
client_name: Sam B. Turner
first_name:  Sam B.
last_name:   Turner
```

We could have added a branch that removed `NORTHSTAR SERVICES LLC` and copied `B.` into `first_name`. That would have fixed the example and taught the system nothing we could safely reuse.

Instead, the analyst approved a bounded rule:

> When a source organization precedes a person's name in `client_name`, retain the person spans. Build `first_name` from every person token except the last. Use the last person token as `last_name`.

The analyst approved no more than that. Deleting every occurrence of Northstar would have been a source-specific exception. The reverse order, relationship markers, registration text, trusts, and name suffixes were still undecided.

We added the rule to the Sketch and compiled another projection.

Then we ran the opposite order:

```text
client_name: Sam B. Turner NORTHSTAR SERVICES LLC
first_name:  Sam
last_name:   Turner
```

The first rule did not cover it. The analyst reviewed the new case and approved an extension: the person may appear before or after the source organization.

That is the working rhythm:

```text
run a record
→ inspect the spans, matched rule, and proposed writes
→ classify the failure
→ repair the implementation or approve a policy change
→ compile again
→ run the active case and earlier regressions
```

A failed case changes policy only after review. If the Sketch already says what should happen, we repair the projection. If the Sketch is silent or wrong, someone who owns the data decision approves what later records may inherit.

## Express business rules as record queries

The policy layer matches semantic roles and their positions. It does not match one company name, one fixture ID, or one model-specific label.

A simplified version of the organization-noise rule looks like this:

```json
{
  "when": {
    "type": "all",
    "clauses": [
      {
        "type": "person_span_count",
        "field": "client_name",
        "min": 2
      },
      {
        "type": "span_role_present",
        "field": "client_name",
        "role": "source organization"
      },
      {
        "type": "not_span_role_present",
        "field": "client_name",
        "role": "relationship marker"
      },
      {
        "type": "not_span_role_present",
        "field": "client_name",
        "role": "registration type"
      }
    ]
  },
  "then": [
    {
      "op": "set_person_fields_around_role",
      "field": "client_name",
      "boundary_roles": [
        "source organization",
        "trust or organization"
      ],
      "terminal_non_family_role": "name suffix"
    }
  ],
  "review_when": [
    "person spans overlap",
    "no family-name candidate remains"
  ]
}
```

The actual policy has more detail. The important divisions are visible here:

- `when` selects a record pattern from semantic evidence;
- `then` names a bounded record operation;
- `review_when` blocks automatic application when the evidence cannot support a safe write.

The rule does not call the classifier. A different classifier can satisfy the same semantic-role interface. The rule also does not contain field-assignment code. A different compiler can implement the same operation semantics.

This is how business rules stay out of Python branches without pretending that JSON somehow removes complexity. The complexity remains. It becomes inspectable policy with named inputs, scope, exclusions, operations, and review boundaries.

## Compile policy into writes

When the query matches, the evaluator returns the exact spans that satisfied it:

```text
selected people
- "Sam"     client_name 23..26
- "B."      client_name 27..29
- "Turner"  client_name 30..36

matched boundary
- "NORTHSTAR SERVICES LLC"
  client_name 0..22
  role: source organization
```

The compiler turns the approved operation into selectors:

```text
client_name ← compose selected person spans [0..-1]
first_name  ← compose selected person spans [0..-2]
last_name   ← selected person span [-1]
```

It then proposes three writes:

```text
client_name = "Sam B. Turner"
first_name  = "Sam B."
last_name   = "Turner"
```

Each write carries the old value, proposed value, matched pattern, compiled operation, and source spans. If a reviewer rejects the output, we can locate the failure before changing anything.

That trace is also what keeps the classifier in its proper role. “The model cleaned the name” gives the business owner no useful control. “The classifier returned these spans; this policy selected them; the compiler produced these writes” exposes every boundary where the result can be challenged.

## Coordinate several rules on one row

The name rule is one of many. A record may also require us to:

- split unit text from a street address;
- promote an address placed in the wrong field;
- split city, region, and postal code;
- normalize a registration type;
- identify a second person;
- preserve a relationship marker;
- keep a terminal name suffix out of the family-name slot.

We compile those policies through a finite operation vocabulary. The current shapes include operations equivalent to:

```text
move_span
set_field
clear_field
compose_spans
set_person_fields_around_role
promote_address
normalize_registration
```

Each operation declares what it reads and writes. Policy sets their order and conflict behavior. The compiler rejects incompatible writes instead of choosing whichever rule ran last. The trace records which operation produced the final value.

The operation vocabulary is an architectural boundary, not a finished ontology. When a failed record requires an operation we do not have, an analyst can approve the behavior and we can add the smallest operation that expresses it without adding a handler for that row.

## Deny writes we cannot justify

A matching rule is not enough to change the record automatically. We deny the write or request review when:

- required source spans are missing;
- selected spans overlap unexpectedly;
- two rules propose incompatible values;
- a family-name selector resolves to a suffix or relationship marker;
- a write would discard required information;
- the record matches a policy review condition;
- classifier evidence falls below the operating threshold.

For accepted cases, the deterministic gate compares the proposed fields with the approved output. The analyst also reviews whether the rule and trace follow the Sketch.

The exact comparison catches known regressions. During Sketch review, the analyst rejects a disguised special case that happens to make every fixture green.

## Rebuild perception against the same expected outputs

The negation refactor replaced a foundational part of perception.

We had put negation inside descriptive embedding labels: `means a person name; exclude registration-like tokens`. Embeddings do not do negation. We had a prompt formulation that happened to work with one checkpoint, not an operation that subtracted negative evidence.

We changed the Sketch so positive role retrieval and demotion were separate. The replacement projection now:

1. analyzes the field and value shape;
2. compiles short positive roles and the demotions relevant to that slot;
3. retrieves positive and embedding-demotion spans in one classifier call;
4. adds configured phrase matches;
5. subtracts overlapping penalties from positive candidates;
6. drops candidates below the configured threshold;
7. applies bounded structural post-processing.

A registration token can demote an overlapping person-name candidate without suppressing valid registration evidence elsewhere in the row.

We changed the Sketch and the projection while holding the behavioral constraints fixed. The old and new perception paths both matched the same 23 accepted inputs and expected outputs before and after post-processing. Bugs exposed by the replacement were projection defects; we fixed them without weakening the expected behavior.

That establishes parity on 23 cases. It does not establish that the new design scales. We still need evidence across other checkpoints, fields, record shapes, and cross-role collisions.

## What we kept and what we threw away

The durable pieces are:

- the record-level policy and its unresolved holes;
- the stable record, span, operation, and trace interfaces;
- accepted counterexamples and the analyst decisions attached to them;
- a curated set of cases that reject known wrong behavior;
- the deterministic comparison and analyst review process;
- provenance for each policy change and compiled write.

The disposable pieces are:

- the classifier checkpoint;
- label wording;
- tokenization and post-processing;
- the query evaluator;
- the mutation compiler;
- the trace UI;
- the surrounding Python.

Engineers still have to build each projection. Calling it disposable means we do not ask the old projection to remain the only surviving record of the decisions it implements.

The current fixtures establish bounded behavior, not general accuracy. But I can replace the classifier or compiler and still show an analyst the same policy, the same source spans, and the exact writes produced from them. The next implementation starts there, not in the old Python.
