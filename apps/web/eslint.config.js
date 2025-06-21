import { reactInternal } from "@jobPilot/eslint-config";

export default [
  ...reactInternal,    // 解构展开已有数组
  {
    rules: {
      'react/jsx-key-props': 'off',
    },
  },
];
