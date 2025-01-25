import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  svelte.configs.recommended,
);
