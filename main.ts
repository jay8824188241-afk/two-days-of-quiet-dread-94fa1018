// Two Days of Quiet Dread — a program that writes one code review comment:
// a single line (85 characters) that approves a pull request while carrying
// quiet existential dread. The dread comes from the reviewer, not from a
// joke bolted on: approving the diff costs one more small piece of the
// person the reviewer meant to become. Flat tone, understatement, and it
// still reads like something a tired engineer would paste before clicking
// approve.
import { mkdirSync, writeFileSync } from "node:fs";

const COMMENT =
  "LGTM. Merging this, and with it, another small piece of the person I meant to become.";

// The gate is strict: one line, 1–140 characters, not only whitespace.
// Check locally so a typo can never ship an invalid entry.
if (!COMMENT || COMMENT.length > 140 || COMMENT.includes("\n") || !COMMENT.trim()) {
  throw new Error("entry comment violates the 1-line / 140-character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMENT, "utf8");
