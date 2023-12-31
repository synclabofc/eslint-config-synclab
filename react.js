module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"standard",
		"plugin:prettier/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript"
	],
	globals: {
		React: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "jsx-a11y", "@typescript-eslint", "import"],
	rules: {
		"@typescript-eslint/no-unused-vars": [
			1,
			{ args: "after-used", argsIgnorePattern: "^_" },
		],
		"prettier/prettier": [
			"error",
			{
				printWidth: 80,
				tabWidth: 2,
				singleQuote: true,
				trailingComma: "all",
				arrowParens: "always",
				semi: true,
				endOfLine: "auto",
			},
		],
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"jsx-a11y/alt-text": [
			"warn",
			{
				elements: ["img"],
				img: ["Image"],
			},
		],
		"jsx-a11y/aria-props": "warn",
		"jsx-a11y/aria-proptypes": "warn",
		"jsx-a11y/aria-unsupported-elements": "warn",
		"jsx-a11y/role-has-required-aria-props": "warn",
		"jsx-a11y/role-supports-aria-props": "warn",
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			typescript: true,
			node: true
		},
		"import/parsers": {
			[require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
		},
	},
};
