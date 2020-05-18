const path = require('path');
module.exports = {
    extends: [
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        'prettier',
        'prettier/react',
    ],
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
    rules: {
        'react/prop-types': "off",
        'react-hooks/rules-of-hooks': 'error',
        '@typescript-eslint/explicit-function-return-type': "off",
        '@typescript-eslint/ban-ts-ignore': "off",
        '@typescript-eslint/no-explicit-any': "off"
    }
};