const path = require("path");
module.exports = {
  viteFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@": path.resolve(__dirname, "../src"),
    };

    return config;
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};
