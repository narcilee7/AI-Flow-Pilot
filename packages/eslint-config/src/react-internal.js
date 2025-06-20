const base = require("base")

module.exports = {
  ...base,
  env: {
    ...base.env,
    browser: true,
  },
  plugins: [...(base.plugins || []), "react", "react-hooks"],
  extends: [
    ...(base.extends || []),
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    ...base.rules,
    "react/react-in-jsx-scope": "off",
    // React 专有规则覆盖
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
