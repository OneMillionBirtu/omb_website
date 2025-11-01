// eslint.config.mjs
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

const config = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', '.next', 'out', 'dist'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-console': 'warn'
    }
  },
  ...next,
  prettier
];

export default config;
