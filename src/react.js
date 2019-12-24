module.exports = {
    plugins: [
        'react',
        'react-hooks',
    ],
    rules: {
        /* Eslint-Plugin-React */
        'react/button-has-type'         : 'error',
        'react/destructuring-assignment': [
            'error',
            'always',
            { ignoreClassFields: true },
        ],
        'react/no-children-prop'        : 'error',
        'react/no-danger-with-children' : 'error',
        'react/no-deprecated'           : 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node'        : 'error',
        'react/no-is-mounted'           : 'error',
        'react/no-render-return-value'  : 'error',
        'react/no-typos'                : 'error',
        'react/no-string-refs'          : 'error',
        'react/no-this-in-sfc'          : 'error',
        'react/no-unknown-property'     : 'error',
        'react/no-unused-prop-types'    : 'error',
        'react/no-unused-state'         : 'error',
        'react/require-render-return'   : 'error',
        'react/self-closing-comp'       : [
            'error',
            {
                component: true,
                html     : true,
            },
        ],
        'react/sort-comp': [
            'error',
            {
                order: [
                    'static-variables',
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    'instance-methods',
                    'everything-else',
                    'render',
                ],
            },
        ],
        'react/sort-prop-types': [
            'error',
            {
                callbacksLast: true,
                ignoreCase   : true,
                requiredFirst: true,
                sortShapeProp: true,
            },
        ],
        'react/state-in-constructor': [
            'error',
            'always',
        ],
        'react/style-prop-object'            : 'error',
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-boolean-value'            : [
            'error',
            'never',
        ],
        'react/jsx-closing-bracket-location': [
            'error',
            'line-aligned',
        ],
        'react/jsx-closing-tag-location': 'error', // sometime indent conflict
        'react/jsx-curly-newline'       : [
            'error',
            {
                multiline : 'require',
                singleline: 'forbid',
            },
        ],
        'react/jsx-curly-spacing': [
            'error',
            {
                when   : 'always',
                spacing: { objectLiterals: 'never' },
            },
        ],
        'react/jsx-equals-spacing': [
            'error',
            'never',
        ],
        'react/jsx-first-prop-new-line': [
            'error',
            'multiline-multiprop',
        ],

        // 'react/jsx-indent': [
        //     'error',
        //     4,
        //     {
        //         'checkAttributes': false,
        //         'indentLogicalExpressions': true
        //     }
        // ],
        'react/jsx-key'               : 'error',
        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: 1,
                when   : 'always',
            },
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props'  : [
            'error',
            { ignoreCase: true },
        ],
        'react/jsx-no-undef'               : 'error',
        'react/jsx-no-useless-fragment'    : 'error',
        'react/jsx-one-expression-per-line': [
            'error',
            { allow: 'single-child' },
        ],
        'react/jsx-curly-brace-presence': [
            'error',
            {
                props   : 'never',
                children: 'never',
            },
        ],
        'react/jsx-fragments': [
            'error',
            'syntax',
        ],
        'react/jsx-pascal-case': [
            'error',
            { allowAllCaps: true },
        ],
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-default-props'   : 'error',
        'react/jsx-sort-props'           : [
            'error',
            {
                callbacksLast : true,
                shorthandFirst: true,
                ignoreCase    : true,
                reservedFirst : true,
            },
        ],
        'react/jsx-space-before-closing': 'error',
        'react/jsx-tag-spacing'         : [
            'error',
            {
                closingSlash     : 'never',
                beforeSelfClosing: 'always',
                afterOpening     : 'never',
                beforeClosing    : 'allow',
            },
        ],
        'react/jsx-uses-react'     : 'error',
        'react/jsx-uses-vars'      : 'error',
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment : 'parens-new-line',
                'return'   : 'parens-new-line',
                arrow      : 'parens-new-line',
                condition  : 'parens-new-line',
                logical    : 'parens-new-line',
                prop       : 'parens-new-line',
            },
        ],

        /* Eslint-Plugin-React-Hooks */
        'react-hooks/rules-of-hooks' : 'error',
        'react-hooks/exhaustive-deps': 'warn',

    },
};

