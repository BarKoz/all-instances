module.exports = {
    'extends': 'airbnb-base',
    'rules': {
        'camelcase': [0, { properties: 'never' }],
        'max-len': [0, { code: 160 }],
        'no-param-reassign': [0, { props: false }],
        'class-methods-use-this': [0],
        'import/no-dynamic-require': [0],
        'import/extensions': [0],
        'global-require': [0],
        'arrow-parens': [0],
        'object-curly-newline': [0],
        'max-classes-per-file': [0],
        'no-mixed-operators': [0],
        'no-new': 0,
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
    },
    'parser': '@babel/eslint-parser',
    'parserOptions': {
        'ecmaVersion': 2021,
        'sourceType': 'module',
    },
    'env': {
        'es6': true,
        'es2020': true,
        'es2021': true,
        'node': true,
    },
};
