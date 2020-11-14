module.exports = {
    presets: [
        [
            'next/babel',
            {
                'preset-env': {
                    targets: {
                        browsers: ['defaults', 'IE>=11', 'iOS >=9', '>2%'],
                    },
                    loose: true,
                    modules: false,
                    useBuiltIns: 'usage',
                    corejs: { version: 3, proposals: true },
                    forceAllTransforms: true,
                    spec: true,
                },
                'transform-runtime': {
                    absoluteRuntime: true,
                    version: '3',
                    regenerator: true,
                },
            },
        ],
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-spread',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        [
            'babel-plugin-styled-components',
            {
                minify: true,
                pure: true,
                ssr: true,
                displayName: true,
                preprocess: false,
            },
        ],
        'add-react-displayname',
        'istanbul',
    ],
    env: {
        test: {
            presets: [
                [
                    'next/babel',
                    {
                        'transform-runtime': {
                            absoluteRuntime: true,
                            version: '3',
                            regenerator: true,
                        },
                    },
                ],
            ],
            plugins: ['@babel/transform-runtime', 'babel-plugin-dynamic-import-node', 'istanbul'],
        },
    },
};
