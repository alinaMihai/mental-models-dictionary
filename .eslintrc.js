const path = require('path');
module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended",
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        "prettier/@typescript-eslint",
        'prettier',
        'prettier/react',
    ],
    rules: {
        'react/prop-types': 0,
        'react-hooks/rules-of-hooks': 'error',
        'no-console': 'warn',
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslit/ban-ts-ignore': 0,
        '@typescript-eslit/no-explicit-any': 0
    },
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    plugins: ['react', 'import', 'jsx-a11y', 'react-hooks'],
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            webpack: {
                config: path.resolve(__dirname, 'config/webpack.config.js'),
            },
        },
    },
};