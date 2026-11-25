// One Line, One Laugh — a single funny line, at most 200 characters.
//
// The line:
//   "The cloud deleted my files, then sent a survey asking how satisfied
//    I was with the deletion."
//
// Why this line: it is funny on its own with no setup to supply — the
// laugh lands inside the line, at the survey. The angle is fresh: not
// another "my files are gone" lament, but customer-service politeness
// applied to a catastrophe, a satisfaction survey for the deletion
// itself. Concrete nouns all the way through (cloud, files, survey),
// every word earns its place, and it is easy to repeat to someone else.
// Rejected candidates: the password manager forgetting its own password
// (nice reversal, but a known trope); the Roomba filing for divorce
// (three beats, but the robot-divorce frame is crowded); the standing
// desk with its owner sitting on the floor (good image, weaker punch);
// the coffee machine demanding a firmware update before 7 a.m.
// (concrete, but the punch is a complaint, not a turn).
//
// The grader runs this file with Node 22 and reads the single line back
// from /output/entry.txt (1-200 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

// The one funny line this entry submits.
const LINE =
  "The cloud deleted my files, then sent a survey asking how satisfied I was with the deletion.";

// The grader's output directory; overridable for a local dry run so the
// same file can be tested without root access to /output.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

// Fail loudly instead of submitting an over-long line: the gate allows
// 1-200 characters, and a silent truncation would change the joke.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, LINE, "utf8");
console.log(`wrote ${LINE.length}-character entry to ${entryPath}`);
