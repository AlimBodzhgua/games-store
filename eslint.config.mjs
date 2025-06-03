import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			js.configs.recommended,
			importPlugin.flatConfigs.recommended,
			pluginReact.configs.flat.recommended,
			pluginReact.configs.flat['jsx-runtime'],
			...tseslint.configs.recommended,
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				typescript: {
					project: './tsconfig.json',
				},
			},
		},
		plugins: {
			'react-refresh': reactRefresh,
		},
		rules: {
			...eslintConfigPrettier.rules,
			quotes: ['error', 'single'],
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
			'react/prop-types': 'off',
			'react/display-name': 'off',
			'react-hooks/exhaustive-deps': 'off',
		},
	},
);