import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const frontendRoot = path.join(repoRoot, "frontend");
const frontendNext = path.join(frontendRoot, ".next");
const rootNext = path.join(repoRoot, ".next");

if (!fs.existsSync(frontendNext)) {
  console.error("Expected frontend/.next after build, but it was not found.");
  process.exit(1);
}

fs.rmSync(rootNext, { recursive: true, force: true });
fs.cpSync(frontendNext, rootNext, { recursive: true });

console.log("Synced frontend/.next to root .next for deployment.");
