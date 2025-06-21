import nodePlugin from "eslint-plugin-n";
import base from "./base";

const nodeConfig = [
  ...base,
  {
    plugins: {
      n: nodePlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
    },
    rules: {
      "n/no-missing-import": "error",
      "n/no-unsupported-features/es-syntax": "off",
    },
  },
];

export default nodeConfig;
