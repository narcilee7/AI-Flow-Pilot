const base = require('base')

module.exports = {
  ...base,
  env: {
    node: true,
    es2021: true,
  },
  plugins: base.plugins,
  extends: [
    ...(base.extends || []),
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    ...base.rules,
    // Node 相关规则覆盖
  },
};
