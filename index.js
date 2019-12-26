module.exports = {
    parser: '@typescript-eslint/parser',
    env   : {
        browser: true,
        es6    : true,
        node   : true,
        mocha  : true,
    },
    globals: {
        Atomics          : 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion : 2018,
        sourceType  : 'module',
        ecmaFeatures: { jsx: true },
    },
    plugins: [
        'import',
        'promise',
        '@typescript-eslint',
        'react',
        'react-hooks',
    ],
    'extends': [
        './src/base.js',
        './src/es6.js',
        './src/node.js',
        './src/promise.js',
        './src/import.js',
        './src/typescript.js',
        './src/react.js',
    ].map(require.resolve),
    rules: { 'no-unused-vars': 'off' },
};
