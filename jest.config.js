const path = require('path');

module.exports = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    setupFiles: ['core-js', 'dotenv/config'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    verbose: true,
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    globals: {
        NODE_ENV: 'test',
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'stories'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.svg': '<rootDir>/__mocks__/svgMock.js',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^./react': path.resolve(__dirname, 'node_modules/react'),
        '^./react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        '^./prop-types': path.resolve(__dirname, 'node_modules/prop-types'),
        '^./styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', 'styles.js'],
    coverageReporters: ['json', 'html', 'text'],
    coverageDirectory: './jest-coverage',
    collectCoverage: true,
    collectCoverageFrom: [
        './src/containers/**/*.js',
        './src/containers/*.js',
        './src/store/ducks/**/login.js',
        './src/store/ducks/**/reducer.js',
        './src/store/sagas/**/*.js',
        './src/utils/**/*.js',
        './src/services/**/*.js',
        './src/hooks/**/*.js',
        'node_modules/@pickle/**/*',
        '!./src/hooks/useInstana.js',
        '!./src/utils/isProduction.js',
        '!./src/utils/redirectUser.js',
    ],
};
