import assert from "node:assert/strict";
import test from "node:test";

import {
  createPracticeTools,
  validateStrategyTree
} from "../assets/js/webmcp-practices.mjs";

const HUMAN_JUDGMENT =
  "A responsible human decides whether the aim, evidence, and trade-offs are sound.";
const SUBSTANTIVE_CORRECTNESS =
  "A domain owner verifies that the resulting work is substantively correct.";

function strategyTree(overrides = {}) {
  const tree = {
    id: "grounded-execution-tree",
    objective: "Change the team's behavior safely",
    steps: [
      {
        id: "aim",
        parentId: null,
        strategy: "Change the team's behavior safely",
        tactic: "Run a grounded execution loop",
        necessity: "A clear aim is necessary to distinguish progress from activity.",
        tacticJustification: "A short loop keeps the intended change and the evidence visible."
      },
      {
        id: "frame",
        parentId: "aim",
        strategy: "Make the desired behavior observable",
        tactic: "Write the aim and success evidence before acting",
        necessity: "Without an observable target, the team cannot tell whether the work helped.",
        tacticJustification: "Writing the target makes progress inspectable before implementation starts."
      },
      {
        id: "inspect",
        parentId: "aim",
        strategy: "Inspect the real workflow",
        tactic: "Trace decisions, constraints, and evidence with the people doing the work",
        necessity: "Local workflow knowledge is necessary to avoid optimizing an imaginary problem.",
        tacticJustification: "The people doing the work can expose constraints that an abstract plan misses."
      }
    ],
    sufficiencyGroups: [
      {
        id: "root-coverage",
        parentId: null,
        memberStepIds: ["aim"],
        sufficiencyClaim: "The aim step gives the tree its direction."
      },
      {
        id: "aim-coverage",
        parentId: "aim",
        memberStepIds: ["frame", "inspect"],
        sufficiencyClaim: "Together these members sufficiently cover the aim before implementation."
      }
    ]
  };

  return {
    ...tree,
    ...overrides,
    steps: overrides.steps ?? tree.steps.map((step) => ({ ...step })),
    sufficiencyGroups: overrides.sufficiencyGroups ?? tree.sufficiencyGroups.map((group) => ({
      ...group,
      memberStepIds: [...group.memberStepIds]
    }))
  };
}

function invalidResult(tree) {
  const result = validateStrategyTree(tree);
  assert.equal(result.valid, false, `expected invalid tree, got ${JSON.stringify(result)}`);
  return result;
}

function diagnosticText(result) {
  return JSON.stringify(result).toLowerCase();
}

const practices = [
  {
    id: "grounded-execution",
    version: "1.0.0",
    title: "Grounded execution",
    summary: "Keep agent work pointed at an observable aim.",
    whenToUse: "When agents are accelerating work and reversals or thrash are possible.",
    notFor: "When the responsible people cannot inspect the workflow or make the decision.",
    contract: {
      humanJudgment: HUMAN_JUDGMENT,
      substantiveCorrectness: SUBSTANTIVE_CORRECTNESS
    },
    strategyTree: strategyTree()
  },
  {
    id: "context-stack",
    version: "1.0.0",
    title: "Context stack",
    summary: "Carry forward the context that keeps work coherent.",
    whenToUse: "When a team needs durable context across work sessions.",
    notFor: "When no one is accountable for maintaining the context.",
    contract: {
      humanJudgment: HUMAN_JUDGMENT,
      substantiveCorrectness: SUBSTANTIVE_CORRECTNESS
    },
    strategyTree: strategyTree({ id: "context-stack-tree" })
  }
];

test("validateStrategyTree accepts a valid nested strategy tree", () => {
  const result = validateStrategyTree(strategyTree());

  assert.equal(result.valid, true, JSON.stringify(result));
  assert.deepEqual(result.errors, []);
});

test("validateStrategyTree rejects a step with no necessity statement", () => {
  const tree = strategyTree();
  tree.steps[1].necessity = "";

  const result = invalidResult(tree);
  assert.match(diagnosticText(result), /necessity/);
});

test("validateStrategyTree rejects a group with no sufficiency coverage", () => {
  const tree = strategyTree();
  tree.sufficiencyGroups[1].memberStepIds = ["frame"];

  const result = invalidResult(tree);
  assert.match(diagnosticText(result), /sufficiency|coverage|inspect/);
});

test("validateStrategyTree rejects an unknown group member", () => {
  const tree = strategyTree();
  tree.sufficiencyGroups[1].memberStepIds.push("does-not-exist");

  const result = invalidResult(tree);
  assert.match(diagnosticText(result), /unknown|member|exist/);
});

test("validateStrategyTree rejects duplicate step ids", () => {
  const tree = strategyTree();
  tree.steps.push({ ...tree.steps[1] });

  const result = invalidResult(tree);
  assert.match(diagnosticText(result), /duplicate.*(step|id)|(step|id).*duplicate/);
});

test("validateStrategyTree rejects a dangling parent", () => {
  const tree = strategyTree();
  tree.steps[1].parentId = "missing-parent";

  const result = invalidResult(tree);
  assert.match(diagnosticText(result), /parent|dangling|unknown/);
});

test("validateStrategyTree rejects a parent cycle", () => {
  const tree = strategyTree();
  tree.steps[1].parentId = "inspect";
  tree.steps[2].parentId = "frame";

  const result = invalidResult(tree);
  assert.match(diagnosticText(result), /cycle|cyclic/);
});

test("validateStrategyTree rejects duplicate group coverage", () => {
  const tree = strategyTree();
  tree.sufficiencyGroups.push({
    ...tree.sufficiencyGroups[1],
    id: "same-coverage-different-label",
    memberStepIds: ["frame"]
  });

  const result = invalidResult(tree);
  assert.match(diagnosticText(result), /duplicate|coverage|group/);
});

test("a missing review trigger is a warning, not a structural failure", () => {
  const tree = strategyTree();
  const result = validateStrategyTree(tree);

  assert.equal(result.valid, true, JSON.stringify(result));
  assert.ok(Array.isArray(result.warnings));
  assert.match(diagnosticText(result), /review.*trigger|trigger.*review/);
});

test("validation result preserves the human-judgment and substantive-correctness boundary", () => {
  const result = validateStrategyTree(strategyTree());

  assert.equal(result.humanJudgmentRequired, true);
  assert.match(`${result.message} ${result.caveat}`, /human judgment/i);
  assert.match(`${result.message} ${result.caveat}`, /substantive/i);
});

function toolSet() {
  const tools = createPracticeTools(practices);
  assert.ok(Array.isArray(tools), "createPracticeTools must return a tool list");
  return tools;
}

function tool(name) {
  const found = toolSet().find((candidate) => candidate.name === name);
  assert.ok(found, `missing ${name} tool`);
  return found;
}

test("list_practices filters by query without returning unrelated practices", () => {
  const result = tool("list_practices").execute({ query: "grounded" });

  assert.equal(result.practices.length, 1);
  assert.equal(result.practices[0].id, "grounded-execution");
  assert.equal(result.practices.some((practice) => practice.id === "context-stack"), false);
});

test("get_practice_contract rejects an unknown practice id", () => {
  assert.throws(
    () => tool("get_practice_contract").execute({ id: "not-a-practice" }),
    /unknown|not found|practice/i
  );
});

test("practice tools reject extra named arguments", () => {
  for (const name of ["list_practices", "get_practice_contract", "check_strategy_tree"]) {
    assert.throws(
      () => tool(name).execute({ extra: true }),
      /extra|argument|property|accept/i,
      `${name} accepted an undeclared argument`
    );
  }
});

test("check_strategy_tree executes the structural validator and returns its boundary", () => {
  const result = tool("check_strategy_tree").execute({
    tree: strategyTree()
  });

  assert.equal(result.valid, true, JSON.stringify(result));
  assert.deepEqual(result.errors, []);
  assert.equal(result.humanJudgmentRequired, true);
  assert.match(`${result.message} ${result.caveat}`, /human judgment/i);
  assert.match(`${result.message} ${result.caveat}`, /substantive/i);
});
