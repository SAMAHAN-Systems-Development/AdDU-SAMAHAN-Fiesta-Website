const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
    // "@storybook/preset-scss"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "staticDirs": ['../public'],
  "rules": [
    {
      test: /\.scss$/,
      loaders: ["style-loader","css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '/addu-logo.png': path.resolve(__dirname, "../public/addu-logo.png"),
    };

    return config;
  }
}