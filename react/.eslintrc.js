module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        es6: true,
        node: true,
        browser: true,
        jquery: true,
        mocha: true
    },
    rules: {
        'no-unused-vars': [
            'error',
            {
                args: 'none'
            }
        ],
        'linebreak-style': ['error', 'unix'],
        'no-console': 0,
        'no-prototype-builtins': [0]
    },
    settings: {
        react: { version: 'detect' }
    }
};
