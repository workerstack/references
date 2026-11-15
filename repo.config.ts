import { defineConfig } from "@workerstack/repo";

export default defineConfig({
  packs: ["standards"],
  link: { push: "allow" },
});
