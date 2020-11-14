module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:jest-dom/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'prettier/react',
        'plugin:cypress/recommended',
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    globals: {
        __static: true,
        cy: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 8,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
    },
    plugins: ['react', 'react-hooks', 'prettier', 'jest-dom'],
    rules: {
        'prettier/prettier': 'error',
        'max-len': [
            2,
            {
                code: 120,
                ignoreComments: true,
                ignoreUrls: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-fragments': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/display-name': 1,
        'react/prefer-stateless-function': 0,
        'react/state-in-constructor': 0,
        'react/jsx-curly-newline': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'jsx-a11y/accessible-emoji': 0,
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                aspects: ['invalidHref'],
            },
        ],
        'comma-dangle': 'off',
        'no-underscore-dangle': 'off',
        'one-var': 'off',
        'no-return-assign': 'off',
        'class-methods-use-this': 'off',
        'import/no-named-as-default-member': 'off',
        'object-curly-spacing': [2, 'always'],
        semi: ['error', 'always'],
        'no-unused-vars': [
            1,
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: 'res|next|^err|^_',
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
            },
        ],
        'no-unused-expressions': [
            2,
            {
                allowTaggedTemplates: true,
            },
        ],
        'no-param-reassign': [
            2,
            {
                props: false,
            },
        ],
        'no-console': 0,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        'consistent-return': 0,
        curly: [2, 'multi-line'],
        'arrow-body-style': [2, 'as-needed'],
        'arrow-parens': 0,
        'no-mixed-operators': 0,
        quotes: ['error', 'single'],
        camelcase: 0,
    },
};
