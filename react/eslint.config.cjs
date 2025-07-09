const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const babelParser = require("@babel/eslint-parser");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    extends: compat.extends("eslint:recommended", "plugin:react/recommended"),

    languageOptions: {
        parser: babelParser,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: "latest",
        },

        globals: {
            ...globals.node,
            ...globals.browser,
            ...globals.jquery,
            ...globals.mocha,
        },
    },

    rules: {
        "no-unused-vars": ["error", {
            args: "none",
        }],

        "linebreak-style": ["error", "unix"],
        "no-console": 0,
        "no-prototype-builtins": [0],
    },

    settings: {
        react: {
            version: "detect",
        },
    },
}, globalIgnores(["**/_*", "**/css", "**/dist", "**/node_modules", "**/test"])]);
