module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react/jsx-runtime", // disable error => | import react from 'react' |
		"eslint-disable react/prop-types", // disable error => | missing props |
		"standard",
		"eslint-config-prettier",
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {},
};
