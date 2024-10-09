import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';


export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
      'indent': ['error', 2],
      'eol-last': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-multiple-empty-lines': 'error',
      'no-trailing-spaces': 'error',
      'comma-dangle': ['error', 'never'],
      'comma-style': ['error', 'last'],
      'no-extra-semi': 'error',
      'semi': ['error', 'always'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    },
    'settings': {
      'react': {
        'version': 'detect'
      }
    }
  }
];
