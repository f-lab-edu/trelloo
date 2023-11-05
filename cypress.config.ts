import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "5ouo1q",

  e2e: {
    baseUrl: "http://127.0.0.1:5173/",
    experimentalStudio: true,
  },
});
