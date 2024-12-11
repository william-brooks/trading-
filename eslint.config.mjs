// @ts-check

import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, prettierConfig, {
  plugins: {
    import: importPlugin,
    prettier: prettier,
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    semi: ['error', 'always'],
    'no-trailing-spaces': ['error'],
    'no-unused-vars': ['error', { args: 'none', vars: 'all', varsIgnorePattern: '^_' }],
    'prettier/prettier': 'error',
  },
});
