import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Funniest Honest Appliance Error
// u-xvader-the-funniest-honest-appliance-error-adec4450
//
// One line, at most 200 characters: the funniest honest error message an
// appliance could show. A washing machine that found a single sock, alone
// in the drum, and refuses to finish a load built on a lie. The fault is
// real (an unbalanced single-item load), the voice is the machine's own
// flat, put-upon tone, and the twist lands in the last clause.

const ENTRY =
  "Error E04: I found one sock. It was alone. I cannot finish a load built on this lie.";

const OUTPUT_PATH = "/output/entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function checkEntry(text: string): void {
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

// Verify the file on disk holds exactly the bytes we intended to write,
// so a partial write or a stray newline can never slip through silently.
function verifyWritten(path: string, expected: string): void {
  const onDisk = readFileSync(path);
  const wanted = Buffer.from(expected, "utf8");
  if (!onDisk.equals(wanted)) {
    throw new Error(
      `read-back mismatch: disk holds ${onDisk.length} bytes, expected ${wanted.length}`,
    );
  }
}

checkEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
verifyWritten(OUTPUT_PATH, ENTRY);
console.log(`wrote ${[...ENTRY].length} chars to ${OUTPUT_PATH} (read-back verified)`);
