const base = require("./base");

module.exports = {
  ...base,
  env: {
    ...base.env,
    browser: true,
  },
  plugins: [...(base.plugins || []), "vue"],
  extends: [
    ...(base.extends || []),
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    ...base.rules,
    // Vue 相关规则覆盖
  },
};
