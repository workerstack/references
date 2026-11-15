import { defineConfig } from "@workerstack/repo";

export default defineConfig({
  packs: ["standards"],
  // Each repo links @workerstack/repo from the sibling checkout, so a push must go while it is linked.
  link: { push: "allow" },
});
