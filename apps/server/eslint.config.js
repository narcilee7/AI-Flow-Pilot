import { nodeInternal } from "@jobPilot/eslint-config";

export default [
  ...nodeInternal,
  {
    rules: {
      'no-console': 'off',
      'semi': ['errors', 'always'],
    },
  },
];
