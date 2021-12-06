module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'max-len': ['error', { code: 140 }],
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['*/.stories.js'] }],
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': ['error', 'after'],
    'linebreak-style': 0,
    curly: ['error'],
    'import/extensions': [
      'error',
      'always',
      {
        vue: 'never',
        js: 'never',
      },
    ],
  },
};
