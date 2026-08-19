---
title: "The Record Compiler"
date: 2026-08-19 15:15:00 -0400
author: muness
toc: true
comments: true
excerpt: "How we kept analyst-approved normalization rules while replacing the classifier, query evaluator, compiler, and surrounding code."
---

Twenty minutes after I told a coding agent to use GLiNER to structure a set of messy records, it said it was done. That was too fast. I opened the code. It had parsed the raw fields with regex and string splitting, then attached our semantic-role labels to the pieces. The output looked plausible. The architecture was fake.

On my current engagement, we are rebuilding an ETL process that turns records from hundreds of source layouts into the same dozen-ish fields: names, organizations, addresses, record types, and relationships. The clean layouts give us one fact per column. The bad ones combine several facts in one field, put them in the wrong fields, abbreviate them, repeat them, or contradict one another.

A failed record usually arrives with an obvious local fix: add a regex, split a string, or copy the middle initial from another column. Each patch gets one more row through. After enough of them, the parser becomes a house of cards, and the reasons it behaves that way are mostly forgotten in old commits.

I do not trust a coding agent to preserve an architectural boundary because I wrote it in a prompt. Once we agree on the problem and approach, I have the agent turn those decisions into integration and architecture tests. Then it writes the implementation. The first implementation usually fails those tests. That failure exposes the shortcut, and I can send the agent back to fix the implementation without changing the decision.

Architecture and integration tests protect boundaries we already understand. A new malformed record raises a different question: should this failure change policy, or does the implementation already violate it? We use [Counterexample-Supplemented Sketches](https://github.com/open-horizon-labs/counterexample-supplemented-sketches), or CESS, for that second loop. An analyst decides what the failed record is allowed to teach, we add the approved rule to a governed specification, and we preserve the corrected record as evidence. The classifier, tokenizer, query evaluator, compiler, and surrounding code can all be replaced.

Here are two synthetic inputs. I changed the names, values, and source labels. The mess is representative.

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

[Replacing the Implementation Without Losing the Decisions](/posts/replacing-the-implementation-without-losing-the-decisions/) makes the architectural argument. Here I stay with the records: how a failed normalization becomes approved policy, compiled writes, and a constraint on the next implementation.

CESS calls the governed specification a Sketch and the generated implementation a projection. An accepted counterexample preserves the bad output, the approved correction, and the bounded policy change that correction supports. We use the current Sketch and stable interfaces to generate a working classifier, query evaluator, and field-writing pipeline.

When a record failed, we made one of two changes:

- If the Sketch already covered the record, we repaired or replaced the implementation.
- If the Sketch did not cover the record, an analyst decided what the case was allowed to teach us. We updated the Sketch and rebuilt.

We rejected handler patches that added a business rule merely to make the current fixture pass.

## Compile the complete record

We normalize a complete row at a time. A field-by-field cleaner cannot see that:

- an organization and a person share the name field;
- the middle initial missing from `GIVEN_NAME` is present in `RECORD_NAME`;
- the unit is stuck to the street address;
- the second address line contains the city, region, and postal code;
- `IND` describes the record rather than the person.

A name rule may need to update `client_name`, `first_name`, and `last_name` together. An address rule may consume text that must not remain available to a name rule. We therefore produce one transformation plan for the complete record.

Source adapters first map each layout into a stable bag of fields. Everything after that boundary operates on the same record shape:

```text
source row
→ canonical field bag
→ semantic evidence
→ matched record policy
→ compiled field writes
→ normalized record and trace
```

The classifier supplies evidence. The policy layer decides what to write.

## Four constraints before the first rule

The first Sketch was small enough to review. It contained four obligations:

1. Transform one complete record, never one isolated field.
2. Identify semantic roles before moving text.
3. Keep normalization policy out of imperative handlers.
4. Deny ambiguous writes or send the record for review.

We also fixed four interfaces: the canonical record, semantic spans, allowed transformation operations, and output trace. Everything else remained open. The coding agent could choose an implementation, but it could not invent policy for a case no analyst had reviewed.

## Keep regex out of semantic extraction

That twenty-minute projection revealed a hole in our first Sketch. We had required semantic roles but left the extraction boundary open. The output used classifier vocabulary. Regex had made the semantic decisions.

We tightened the Sketch. [GLiNER](https://github.com/urchade/GLiNER), our span classifier, became the source of Phase 1 semantic spans. Post-processing could split an extracted span into traceable child tokens or apply a named fallback rule. It could not assign roles by parsing the raw input, and every derived token had to retain its source.

That Sketch change produced AST checks in CI. They reject a projection that reintroduces regex or string splitting in the extraction path, even when its outputs satisfy the current regression cases.

Later we replaced GLiNER with [GLiNER2](https://github.com/fastino-ai/GLiNER2). We updated the extraction requirement, reprojected, and ran the result against the same record policy and accepted cases. We reused the normalization policy and cases unchanged.

## The classifier returns spans; policy produces writes

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

For every span, we keep at least:

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

## An analyst decides what a failed record teaches

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

A branch that removed `NORTHSTAR SERVICES LLC` and copied `B.` into `first_name` would make this example pass. It would say nothing useful about the next source organization or the reverse ordering.

The analyst approved a bounded rule:

> When a source organization precedes a person's name in `client_name`, retain the person spans. Build `first_name` from every person token except the last. Use the last person token as `last_name`.

The analyst approved no more than that. Deleting every occurrence of Northstar would have been a source-specific exception. The reverse order, relationship markers, registration text, trusts, and name suffixes were still undecided.

We added the rule to the Sketch and reprojected.

Then we ran the opposite order:

```text
client_name: Sam B. Turner NORTHSTAR SERVICES LLC
first_name:  Sam
last_name:   Turner
```

The first rule covered only an organization prefix. The analyst reviewed the new case and approved an extension: the person may appear before or after the source organization.

We repeated the same cycle for each failure:

```text
run a record
→ inspect the spans, matched rule, and proposed writes
→ classify the failure
→ repair the implementation or approve a policy change
→ compile again
→ run the active case and earlier regressions
```

We change policy only after someone who owns the data decision reviews the failure. If the Sketch already says what should happen, we repair the projection. If the Sketch is silent or wrong, that person decides what later records may inherit from this one.

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

The three blocks separate matching, mutation, and review:

- `when` selects a record pattern from semantic evidence;
- `then` names a bounded record operation;
- `review_when` blocks automatic application when the evidence cannot support a safe write.

The classifier and compiler sit behind separate interfaces. The semantic-role interface lets us replace the classifier; the operation interface lets us replace the compiler.

JSON does not remove the complexity. It puts the inputs, scope, exclusions, operations, and review boundaries where an analyst and engineer can inspect them, rather than distributing those decisions through Python branches.

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

The trace shows where a bad output entered: extraction, policy selection, or compilation. “The model cleaned the name” hides all three. The actual sequence is available: the classifier returned these spans; this policy selected them; the compiler proposed these writes. An analyst can challenge any boundary in that sequence.

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

We expect the operation vocabulary to grow. When an analyst approves behavior that the current vocabulary cannot express, we add the smallest reusable operation that covers it rather than a handler for that row.

## Reject writes we cannot justify

We apply a matching rule automatically only when the evidence supports its writes. We reject the write or request review when:

- required source spans are missing;
- selected spans overlap unexpectedly;
- two rules propose incompatible values;
- a family-name selector resolves to a suffix or relationship marker;
- a write would discard required information;
- the record matches a policy review condition;
- classifier evidence falls below the operating threshold.

For accepted cases, the deterministic gate compares the proposed fields with the approved output. That catches known regressions. The analyst separately reviews the simulated output against the current Sketch. When a failure proposes a policy change, a second decision covers the new rule's meaning and scope. A disguised special case can make every fixture green and still fail that review.

The regression gate protects approved examples. Sketch review checks whether generated behavior follows current policy. Sketch-change approval governs what a new example is allowed to teach the system.

## Replace perception without changing expected behavior

We had put negation inside descriptive embedding labels: `means a person name; exclude registration-like tokens`. Embedding similarity did not turn `exclude` into a negation operator. It remained text inside one similarity target; the scorer never produced a separate negative score. The wording happened to work with one checkpoint.

We changed the Sketch so positive role retrieval and demotion were separate. The replacement projection now:

1. analyzes the field and value shape;
2. compiles short positive roles and the demotions relevant to that slot;
3. retrieves positive and embedding-demotion spans in one classifier call;
4. adds configured phrase matches;
5. subtracts overlapping penalties from positive candidates;
6. drops candidates below the configured threshold;
7. applies bounded structural post-processing.

A registration token can demote an overlapping person-name candidate without suppressing valid registration evidence elsewhere in the row.

We rebuilt perception, then ran the old and new versions against the same 23 accepted inputs and expected outputs, both before and after post-processing. During the replacement, those cases exposed implementation bugs. We fixed the bugs without changing an accepted case or weakening its expected behavior.

That establishes parity on 23 cases. It does not establish that the new design scales. We still need evidence across other checkpoints, fields, record shapes, and cross-role collisions.

## Keep the decisions; replace the machinery

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

Engineers still build each projection. “Disposable” means the implementation is no longer the only surviving record of the decisions it implements.

The current fixtures establish bounded behavior, not general accuracy. Even so, I can replace the classifier or compiler and still show an analyst the same policy, the same source spans, and the exact writes produced from them.

I still do not trust the next generated projection on sight. I run it through architecture checks, approved-output comparison, and analyst review. When the review authorizes a new rule, we write it into the Sketch and generate the next projection from it. The next implementation starts from approved decisions, not old Python.
