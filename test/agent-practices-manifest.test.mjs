import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = resolve(repoRoot, "_data/agent_practices.yml");
const canonicalSkillsRepository = "https://github.com/open-horizon-labs/skills";
const installCommand = "npx skills add open-horizon-labs/skills -g -a claude-code -y";

// Keep this parser dependency-free. Ruby/Psych is already required by the
// Jekyll build, and parsing the source YAML here catches drift before a
// generated WebMCP payload hides it.
function readManifest() {
  const ruby = [
    "require 'yaml'",
    "require 'json'",
    "data = YAML.safe_load(File.read(ARGV.fetch(0)), permitted_classes: [], aliases: false)",
    "STDOUT.write(JSON.generate(data))"
  ].join("; ");
  return JSON.parse(execFileSync("ruby", ["-e", ruby, manifestPath], { encoding: "utf8" }));
}

const practices = readManifest();
const expectedIds = ["design-in-practice", "strategy-and-tactics-trees", "open-horizons"];
const expectedDurableSkills = {
  "design-in-practice": ["problem-statement", "solution-space", "execute", "review"],
  "strategy-and-tactics-trees": ["problem-statement", "review"],
  "open-horizons": ["aim", "review", "distill"]
};
const expectedSkillIdSet = [
  "aim",
  "distill",
  "execute",
  "problem-statement",
  "review",
  "solution-space"
];

function nonEmptyString(value, message) {
  assert.equal(typeof value, "string", message);
  assert.ok(value.trim().length > 0, message);
}

function nonEmptyStringList(value, message) {
  assert.ok(Array.isArray(value) && value.length > 0, message);
  for (const item of value) nonEmptyString(item, message);
}

test("practice manifest contains exactly the three stable practice ids", () => {
  assert.ok(Array.isArray(practices));
  assert.deepEqual(
    practices.map((practice) => practice.id).sort(),
    [...expectedIds].sort()
  );
});

test("practice ids are unique and versions are semantic versions", () => {
  const ids = practices.map((practice) => practice.id);

  assert.equal(new Set(ids).size, ids.length);
  for (const practice of practices) {
    nonEmptyString(practice.id, "practice id must be non-empty");
    assert.match(practice.version, /^\d+\.\d+\.\d+$/, `${practice.id} version must be semver`);
  }
});

test("practice provenance points to repository articles and the canonical skills repository", () => {
  for (const practice of practices) {
    const provenance = practice.provenance;

    nonEmptyString(practice.articleUrl, `${practice.id} articleUrl must be non-empty`);
    assert.match(
      practice.articleUrl,
      /^https:\/\/muness\.com\/posts\/[^/]+\/$/,
      `${practice.id} articleUrl must be a canonical post URL`
    );
    nonEmptyString(provenance?.sourceArticlePath, `${practice.id} sourceArticlePath must be non-empty`);
    assert.ok(
      existsSync(resolve(repoRoot, provenance.sourceArticlePath)),
      `${practice.id} sourceArticlePath must exist in the repository`
    );
    assert.equal(provenance.skillsRepository, canonicalSkillsRepository);
  }
});

test("practice installation provenance is optional-manual and never automatic", () => {
  for (const practice of practices) {
    const install = practice.provenance?.install;

    assert.equal(install?.mode, "optional-manual");
    assert.equal(install?.automatic, false);
    assert.equal(install?.command, installCommand);
  }
});

test("durable skill references are non-empty and use the known canonical skill set", () => {
  const usedSkillIds = new Set();

  for (const practice of practices) {
    nonEmptyStringList(practice.provenance?.durableSkills, `${practice.id} durableSkills must be non-empty`);
    assert.deepEqual(practice.provenance.durableSkills, expectedDurableSkills[practice.id]);
    for (const skillId of practice.provenance.durableSkills) usedSkillIds.add(skillId);
  }

  assert.deepEqual([...usedSkillIds].sort(), [...expectedSkillIdSet].sort());
});

test("each practice has bounded usage, an inspectable workflow, checks, and a judgment boundary", () => {
  for (const practice of practices) {
    nonEmptyStringList(practice.whenToUse, `${practice.id} whenToUse must be non-empty`);
    nonEmptyStringList(practice.notFor, `${practice.id} notFor must be non-empty`);

    assert.ok(Array.isArray(practice.workflow) && practice.workflow.length > 0, `${practice.id} workflow must be non-empty`);
    for (const step of practice.workflow) {
      assert.equal(typeof step, "object", `${practice.id} workflow entries must be objects`);
      nonEmptyString(step.id, `${practice.id} workflow step id must be non-empty`);
      nonEmptyString(step.name, `${practice.id} workflow step name must be non-empty`);
      nonEmptyString(step.instruction, `${practice.id} workflow step instruction must be non-empty`);
    }

    nonEmptyStringList(practice.contract?.checks, `${practice.id} contract checks must be non-empty`);
    nonEmptyString(practice.humanJudgment?.boundary, `${practice.id} humanJudgment boundary must be non-empty`);
    nonEmptyStringList(practice.humanJudgment?.requiredFor, `${practice.id} requiredFor must be non-empty`);
  }
});
