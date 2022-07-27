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
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "staticDirs": ['../public'],
  "rules": [
    {
      test: /\.scss$/,
      loaders: ["style-loader","css-loader", "sass-loader","resolve-url-loader"],
      include: path.resolve(__dirname, "../")
    },
  ],
}