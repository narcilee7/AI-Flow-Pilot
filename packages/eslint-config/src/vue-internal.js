import vue from "eslint-plugin-vue";
import base from "./base";

const vueConfig = [
  ...base,
  {
    plugins: {
      vue,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "vue/no-unused-components": "warn",
      "vue/no-multiple-template-root": "off",
    },
  },
];

export default vueConfig;
