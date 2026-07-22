import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';

export default [
  js.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
        process: 'readonly',
        btoa: 'readonly',
        atob: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
        AbortSignal: 'readonly'
      }
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-undef': 'off',
      'no-useless-assignment': 'off',
      'no-irregular-whitespace': 'off',
      'no-empty': 'off'
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', '*.cjs', 'fix_wrappers.cjs'],
  },
];
