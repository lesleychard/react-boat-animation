'use strict';

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'airbnb',
        require.resolve('./config/eslint/style.js'),
        require.resolve('./config/eslint/react.js'),
    ],
    rules: {
    },
};
