const hasOwn = (value, key) => Object.prototype.hasOwnProperty.call(value, key);

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function argumentObject(value, toolName) {
  if (!isRecord(value)) {
    throw new TypeError(`${toolName} expects an object of named arguments.`);
  }
  return value;
}

function onlyArguments(value, allowed, toolName) {
  for (const key of Object.keys(value)) {
    if (!allowed.includes(key)) {
      throw new TypeError(`${toolName} does not accept '${key}'.`);
    }
  }
}

function error(code, path, message) {
  return { code, path, message };
}

function warning(code, path, message) {
  return { code, path, message };
}

function aliasValue(value, aliases) {
  for (const alias of aliases) {
    if (hasOwn(value, alias)) return value[alias];
  }
  return undefined;
}

function aliasNamesPresent(value, aliases) {
  return aliases.filter((alias) => hasOwn(value, alias));
}

const nonEmptyStringSchema = {
  type: "string",
  minLength: 1
};

const nullableStepIdSchema = {
  anyOf: [nonEmptyStringSchema, { type: "null" }]
};

const strategyTreeSchema = {
  type: "object",
  description: "A Strategy & Tactics tree. Structural validity does not establish substantive strategic correctness.",
  properties: {
    objective: {
      ...nonEmptyStringSchema,
      description: "The overarching objective that gives the tree direction."
    },
    steps: {
      type: "array",
      minItems: 1,
      description: "Unique objective/tactic pairings connected by optional parentId references.",
      items: {
        type: "object",
        properties: {
          id: { ...nonEmptyStringSchema, description: "Stable, unique step id." },
          parentId: {
            ...nullableStepIdSchema,
            description: "Parent step id; omit or use null for a root step."
          },
          strategy: { ...nonEmptyStringSchema, description: "The objective this tactic advances (preferred name)." },
          objective: { ...nonEmptyStringSchema, description: "Alias for strategy." },
          tactic: { ...nonEmptyStringSchema, description: "The concrete action used to advance the strategy/objective." },
          necessity: { ...nonEmptyStringSchema, description: "Why this tactic is indispensable for its strategy/objective." },
          tacticJustification: { ...nonEmptyStringSchema, description: "Why this tactic is a good choice (preferred name)." },
          parallelAssumption: { ...nonEmptyStringSchema, description: "Alias for tacticJustification." },
          reviewTrigger: { ...nonEmptyStringSchema, description: "Evidence or event that should trigger review, stop, or pivot." }
        },
        required: ["id", "tactic", "necessity"],
        anyOf: [
          { required: ["strategy"] },
          { required: ["objective"] }
        ],
        allOf: [
          {
            anyOf: [
              { required: ["tacticJustification"] },
              { required: ["parallelAssumption"] }
            ]
          }
        ],
        additionalProperties: false
      }
    },
    sufficiencyGroups: {
      type: "array",
      minItems: 1,
      description: "One or more parent-level groups that cover every step exactly once.",
      items: {
        type: "object",
        properties: {
          parentId: {
            ...nullableStepIdSchema,
            description: "Parent step id, or null for root steps."
          },
          memberStepIds: {
            type: "array",
            minItems: 1,
            items: nonEmptyStringSchema,
            description: "Step ids directly covered by this group's sufficiency claim (preferred name)."
          },
          members: {
            type: "array",
            minItems: 1,
            items: nonEmptyStringSchema,
            description: "Alias for memberStepIds."
          },
          stepIds: {
            type: "array",
            minItems: 1,
            items: nonEmptyStringSchema,
            description: "Alias for memberStepIds."
          },
          sufficiencyClaim: { ...nonEmptyStringSchema, description: "Why this set of members is sufficient for the parent objective (preferred name)." },
          sufficiency: { ...nonEmptyStringSchema, description: "Alias for sufficiencyClaim." },
          claim: { ...nonEmptyStringSchema, description: "Alias for sufficiencyClaim." }
        },
        required: ["parentId"],
        anyOf: [
          { required: ["memberStepIds"] },
          { required: ["members"] },
          { required: ["stepIds"] }
        ],
        allOf: [
          {
            anyOf: [
              { required: ["sufficiencyClaim"] },
              { required: ["sufficiency"] },
              { required: ["claim"] }
            ]
          }
        ],
        additionalProperties: false
      }
    }
  },
  required: ["objective", "steps", "sufficiencyGroups"],
  additionalProperties: false
};

/**
 * Check the structural invariants of an S&T tree.
 *
 * This deliberately does not evaluate whether the strategy is wise, whether a
 * tactic will work, or whether a sufficiency claim is true. Those remain human
 * judgments by people who know the work and its context.
 */
export function validateStrategyTree(tree) {
  const errors = [];
  const warnings = [];
  const steps = isRecord(tree) && Array.isArray(tree.steps) ? tree.steps : [];
  const groups = isRecord(tree) && Array.isArray(tree.sufficiencyGroups) ? tree.sufficiencyGroups : [];

  if (!isRecord(tree)) {
    errors.push(error("invalid-tree", "tree", "Tree must be an object with objective, steps, and sufficiencyGroups."));
  } else {
    if (!isNonEmptyString(tree.objective)) {
      errors.push(error("empty-objective", "objective", "objective must be a non-empty string."));
    }
    if (!Array.isArray(tree.steps)) {
      errors.push(error("invalid-steps", "steps", "steps must be an array."));
    } else if (tree.steps.length === 0) {
      errors.push(error("empty-steps", "steps", "steps must contain at least one step."));
    }
    if (!Array.isArray(tree.sufficiencyGroups)) {
      errors.push(error("invalid-sufficiency-groups", "sufficiencyGroups", "sufficiencyGroups must be an array."));
    } else if (tree.sufficiencyGroups.length === 0) {
      errors.push(error("empty-sufficiency-groups", "sufficiencyGroups", "sufficiencyGroups must contain a group for each parent level."));
    }
  }

  const idToIndex = new Map();
  const validSteps = [];

  steps.forEach((step, index) => {
    const path = `steps[${index}]`;
    if (!isRecord(step)) {
      errors.push(error("invalid-step", path, "Each step must be an object."));
      return;
    }

    if (!isNonEmptyString(step.id)) {
      errors.push(error("empty-step-id", `${path}.id`, "Each step id must be a non-empty string."));
    } else if (idToIndex.has(step.id)) {
      errors.push(error("duplicate-step-id", `${path}.id`, `Step id '${step.id}' is duplicated (first seen at steps[${idToIndex.get(step.id)}].id).`));
    } else {
      idToIndex.set(step.id, index);
    }

    const strategyAliases = aliasNamesPresent(step, ["strategy", "objective"]);
    const strategy = aliasValue(step, ["strategy", "objective"]);
    if (strategyAliases.length === 0 || !isNonEmptyString(strategy)) {
      errors.push(error("empty-strategy", `${path}.strategy`, "Each step needs a non-empty strategy or objective string."));
    }
    if (strategyAliases.length > 1 && strategyAliases.some((key) => !isNonEmptyString(step[key]))) {
      errors.push(error("empty-strategy-alias", `${path}.strategy`, "Provided strategy/objective aliases must both be non-empty strings."));
    }

    if (!isNonEmptyString(step.tactic)) {
      errors.push(error("empty-tactic", `${path}.tactic`, "Each step needs a non-empty tactic string."));
    }
    if (!isNonEmptyString(step.necessity)) {
      errors.push(error("empty-necessity", `${path}.necessity`, "Each step needs a non-empty necessity statement."));
    }

    const justificationAliases = aliasNamesPresent(step, ["tacticJustification", "parallelAssumption"]);
    const justification = aliasValue(step, ["tacticJustification", "parallelAssumption"]);
    if (justificationAliases.length === 0 || !isNonEmptyString(justification)) {
      errors.push(error("empty-tactic-justification", `${path}.tacticJustification`, "Each step needs a non-empty tacticJustification or parallelAssumption."));
    }
    if (justificationAliases.length > 1 && justificationAliases.some((key) => !isNonEmptyString(step[key]))) {
      errors.push(error("empty-justification-alias", `${path}.tacticJustification`, "Provided tacticJustification/parallelAssumption aliases must both be non-empty strings."));
    }

    if (hasOwn(step, "parentId") && step.parentId !== null && !isNonEmptyString(step.parentId)) {
      errors.push(error("invalid-parent-id", `${path}.parentId`, "parentId must be null or a non-empty step id."));
    }
    if (hasOwn(step, "reviewTrigger") && !isNonEmptyString(step.reviewTrigger)) {
      errors.push(error("empty-review-trigger", `${path}.reviewTrigger`, "reviewTrigger must be a non-empty string when provided."));
    }
    if (!isNonEmptyString(step.reviewTrigger)) {
      warnings.push(warning("missing-review-trigger", `${path}.reviewTrigger`, "Consider naming the evidence or event that should trigger review, stop, or pivot."));
    }

    validSteps.push(step);
  });

  // Parent references and cycles are checked only for unique, valid ids. This
  // keeps duplicate-id diagnostics from cascading into misleading graph errors.
  const parentById = new Map();
  for (const step of validSteps) {
    if (!isNonEmptyString(step.id) || idToIndex.get(step.id) !== steps.indexOf(step)) continue;
    const parentId = hasOwn(step, "parentId") ? step.parentId : null;
    parentById.set(step.id, parentId);
    if (parentId !== null && !idToIndex.has(parentId)) {
      errors.push(error("missing-parent", `steps[${idToIndex.get(step.id)}].parentId`, `Step '${step.id}' refers to missing parent '${parentId}'.`));
    }
  }

  const state = new Map();
  const visit = (id, trail = []) => {
    const current = state.get(id) || 0;
    if (current === 1) {
      const cycleStart = trail.indexOf(id);
      const cycle = trail.slice(cycleStart).concat(id);
      errors.push(error("cycle", "steps", `Parent relationships contain a cycle: ${cycle.join(" -> ")}.`));
      return;
    }
    if (current === 2) return;
    state.set(id, 1);
    const parentId = parentById.get(id);
    if (parentId !== null && parentById.has(parentId)) visit(parentId, trail.concat(id));
    state.set(id, 2);
  };
  for (const id of parentById.keys()) visit(id);

  const coverage = new Map();
  let hasRootGroup = false;
  groups.forEach((group, index) => {
    const path = `sufficiencyGroups[${index}]`;
    if (!isRecord(group)) {
      errors.push(error("invalid-sufficiency-group", path, "Each sufficiency group must be an object."));
      return;
    }
    if (!hasOwn(group, "parentId")) {
      errors.push(error("missing-group-parent-id", `${path}.parentId`, "Each sufficiency group must identify parentId; use null for root steps."));
    }
    const parentId = hasOwn(group, "parentId") ? group.parentId : null;
    if (parentId !== null && !isNonEmptyString(parentId)) {
      errors.push(error("invalid-group-parent-id", `${path}.parentId`, "A group parentId must be null or a non-empty step id."));
    } else if (parentId !== null && !idToIndex.has(parentId)) {
      errors.push(error("missing-group-parent", `${path}.parentId`, `Sufficiency group refers to missing parent '${parentId}'.`));
    }
    if (parentId === null) hasRootGroup = true;

    const memberAliases = aliasNamesPresent(group, ["memberStepIds", "members", "stepIds"]);
    if (memberAliases.length > 1) {
      errors.push(error("ambiguous-group-members", `${path}.memberStepIds`, "Use only one of memberStepIds, members, or stepIds."));
    }
    const members = aliasValue(group, ["memberStepIds", "members", "stepIds"]);
    if (!Array.isArray(members) || members.length === 0) {
      errors.push(error("invalid-group-members", `${path}.memberStepIds`, "Each sufficiency group needs a non-empty memberStepIds array."));
    }

    const claimAliases = aliasNamesPresent(group, ["sufficiencyClaim", "sufficiency", "claim"]);
    const claim = aliasValue(group, ["sufficiencyClaim", "sufficiency", "claim"]);
    if (claimAliases.length === 0 || !isNonEmptyString(claim)) {
      errors.push(error("empty-sufficiency-claim", `${path}.sufficiencyClaim`, "Each sufficiency group needs a non-empty sufficiency claim."));
    }

    if (!Array.isArray(members)) return;
    const membersInGroup = new Set();
    members.forEach((memberId, memberIndex) => {
      const memberPath = `${path}.memberStepIds[${memberIndex}]`;
      if (!isNonEmptyString(memberId)) {
        errors.push(error("invalid-group-member", memberPath, "Group member ids must be non-empty strings."));
        return;
      }
      if (membersInGroup.has(memberId)) {
        errors.push(error("duplicate-coverage", memberPath, `Step '${memberId}' appears more than once in this sufficiency group.`));
        return;
      }
      membersInGroup.add(memberId);
      if (!idToIndex.has(memberId)) {
        errors.push(error("unknown-group-member", memberPath, `Sufficiency group refers to unknown step '${memberId}'.`));
        return;
      }
      const previous = coverage.get(memberId);
      if (previous) {
        errors.push(error("duplicate-coverage", memberPath, `Step '${memberId}' is covered by both ${previous} and ${path}.`));
      } else {
        coverage.set(memberId, path);
      }
      const expectedParent = parentById.has(memberId) ? parentById.get(memberId) : null;
      if (expectedParent !== parentId) {
        errors.push(error("invalid-sufficiency-coverage", memberPath, `Step '${memberId}' belongs under parent '${expectedParent || "root"}', not '${parentId || "root"}'.`));
      }
    });
  });

  for (const [id, index] of idToIndex.entries()) {
    if (!coverage.has(id)) {
      errors.push(error("absent-sufficiency-coverage", `steps[${index}]`, `Step '${id}' is not covered by exactly one sufficiency group.`));
    }
  }
  const rootIds = [...parentById.entries()].filter(([, parentId]) => parentId === null).map(([id]) => id);
  if (rootIds.length > 0 && !hasRootGroup) {
    errors.push(error("absent-root-sufficiency", "sufficiencyGroups", "Root steps require a sufficiency group with parentId: null."));
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    structuralValidity: errors.length === 0 ? "valid" : "invalid",
    humanJudgmentRequired: true,
    message: errors.length === 0
      ? "Structurally valid. This check does not establish substantive strategic correctness; human judgment remains required."
      : "Structurally invalid. Fix the reported structure, then have people who know the work judge substantive strategic correctness; human judgment remains required.",
    caveat: "Structural validity is not substantive strategic correctness. Human judgment remains required."
  };
}

function practiceMatches(practice, query) {
  const searchable = [practice.id, practice.title, practice.summary, ...(practice.whenToUse || [])]
    .filter((value) => typeof value === "string")
    .join(" ")
    .toLowerCase();
  return searchable.includes(query);
}

/** Create the read-only WebMCP tool definitions for article-backed practices. */
export function createPracticeTools(practices) {
  if (!Array.isArray(practices)) {
    throw new TypeError("createPracticeTools expects an array of practices.");
  }
  const catalog = practices.slice();
  return [
    {
      name: "list_practices",
      description: "List article-backed practice packs, optionally filtered by id, title, summary, or when-to-use guidance.",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string", description: "Optional non-empty search text." }
        },
        additionalProperties: false
      },
      annotations: { readOnlyHint: true },
      execute(args = {}) {
        argumentObject(args, "list_practices");
        onlyArguments(args, ["query"], "list_practices");
        if (args.query !== undefined && !isNonEmptyString(args.query)) {
          throw new TypeError("list_practices query must be a non-empty string when provided.");
        }
        const query = args.query ? args.query.trim().toLowerCase() : "";
        const matches = query ? catalog.filter((practice) => practiceMatches(practice, query)) : catalog;
        return { query: args.query ? args.query.trim() : null, count: matches.length, practices: matches };
      }
    },
    {
      name: "get_practice_contract",
      description: "Get one article-backed practice pack and its bounded workflow, contract, provenance, and human-judgment boundary.",
      inputSchema: {
        type: "object",
        properties: { id: { type: "string", description: "Stable practice id." } },
        required: ["id"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: true },
      execute(args = {}) {
        argumentObject(args, "get_practice_contract");
        onlyArguments(args, ["id"], "get_practice_contract");
        if (!isNonEmptyString(args.id)) {
          throw new TypeError("get_practice_contract id must be a non-empty string.");
        }
        const practice = catalog.find((candidate) => candidate && candidate.id === args.id.trim());
        if (!practice) throw new RangeError(`No practice exists with id '${args.id.trim()}'.`);
        return practice;
      }
    },
    {
      name: "check_strategy_tree",
      description: "Check the structural validity and sufficiency coverage of a Strategy & Tactics tree; this does not judge substantive strategy.",
      inputSchema: {
        type: "object",
        properties: {
          tree: strategyTreeSchema
        },
        required: ["tree"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: true },
      execute(args = {}) {
        argumentObject(args, "check_strategy_tree");
        onlyArguments(args, ["tree"], "check_strategy_tree");
        if (!isRecord(args.tree)) {
          throw new TypeError("check_strategy_tree tree must be an object.");
        }
        return validateStrategyTree(args.tree);
      }
    }
  ];
}
