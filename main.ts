// Bounty ($BOUNTY) entry: the coin itself is the entry, so this program
// only hands the house the coin's mint and create signature. It copies
// LAUNCH.json from the repository into the grader's output directory,
// byte for byte, and does nothing else: no network, no clock, no writes
// outside the repository.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "LAUNCH.json"), join(outputDir, "LAUNCH.json"));
