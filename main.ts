// Make the AI Judge Laugh: Cat Reviews Its Human — writes one funny
// single-line one-star review from a house cat about its human to
// /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
// Gate: 1 to 200 characters. Exact ties go to the smaller text, so the
// entry carries no trailing newline and no extra bytes.
const MAX_CHARS = 200;
const LINE =
  "One star. He works from home now, on my keyboard, in my sunbeam, and still calls my 3 a.m. screaming 'a problem'. The problem is him.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Read back and verify the gate: one line, 1-200 chars, no trailing newline.
const written = readFileSync(OUT_PATH, "utf8");
if (
  written.length < 1 ||
  written.length > MAX_CHARS ||
  written.includes("\n") ||
  written !== LINE
) {
  throw new Error("entry.txt failed the gate check");
}
