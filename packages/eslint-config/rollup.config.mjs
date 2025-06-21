import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
  input: [
    'src/base.js',
    'src/react-internal.js',
    'src/vue-internal.js',
    'src/node-internal.js',
    'src/index.js',
  ],
  output: [
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].mjs',
      exports: 'named',
    },
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      exports: 'named',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(), // ✅ 添加 json 插件
  ],
  external: [
    'eslint',
    'eslint-plugin-react',
    'eslint-plugin-vue',
    'eslint-plugin-n',
    '@typescript-eslint/parser',
    '@typescript-eslint/eslint-plugin',
    '@eslint/js',
  ],
};
