module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended", "plugin:prettier/recommended", "prettier"],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh", "@stylistic/js"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		// "react/jsx-fragments": ["error", "syntax"], //  Removed the rule to make it Easier
		"prettier/prettier": ["error", { endOfLine: "auto", useTabs: true }, { usePrettierrc: true }],
		"react/jsx-no-undef": ["error"], // warns when a variable or function is used without being defined in a JSX expression.
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"@stylistic/js/newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
	},
};
