module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:jest/recommended', 'airbnb'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
  },
};
