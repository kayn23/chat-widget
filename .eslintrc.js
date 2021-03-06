module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'linebreak-style': ['error', 'windows'],
    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'constructor-super': 'off',
    'no-mixed-operators': 'off',
    'no-case-declarations': 'off',
    'default-case': 'off',
    'import/extensions': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off', // todo временно
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-continue': 'off',
    'no-sequences': 'off',
    'no-new': 'off',
    'max-len': ['error', { code: 100 }],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true },
    }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
