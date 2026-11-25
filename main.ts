// One Line, One Laugh.
// A single funny line, no picture, no setup. The laugh lands inside the
// line itself: the cloud deletes your files, then politely asks how
// satisfied you were with the deletion — customer-service politeness
// applied to a catastrophe. Written to /output/entry.txt.
import fs from "node:fs";

const LINE =
  "The cloud deleted my files, then sent a survey asking how satisfied I was with the deletion.";

const GATE_MAX_CHARS = 200;

const trimmed = LINE.trim();
if (trimmed.length === 0 || LINE.length > GATE_MAX_CHARS) {
  throw new Error(`line is ${LINE.length} chars, gate needs 1-${GATE_MAX_CHARS}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, LINE);

console.log(`line written to ${outDir}/entry.txt (${LINE.length} chars)`);
