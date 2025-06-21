import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const base = [
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // Typescript 相关
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/strict-boolean-expressions": "warn",

      // ESLint 推荐覆盖，避免冲突，优先 typescript 版本
      "no-unused-vars": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],

      // 代码风格和最佳实践
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "warn",
      "no-duplicate-imports": "error",
      "no-else-return": "warn",
      "no-empty-function": ["warn", { allow: ["constructors"] }],
      "no-multi-spaces": "error",
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] }
      ],

      // 代码风格：缩进、分号、引号
      "semi": ["error", "always"],
      "quotes": ["error", "double", { avoidEscape: true }],
      "indent": ["error", 2, { SwitchCase: 1 }],

      // import 排序建议(需要安装 eslint-plugin-import)
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
];

export default base;
