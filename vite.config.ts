import { defineConfig } from "vite";
import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  resolve: {
    alias: [
      { find: "@src", replacement: resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@utils",
        replacement: resolve(__dirname, "src/utils"),
      },
    ],
  },
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
} as VitestConfigExport);
