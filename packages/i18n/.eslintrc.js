/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/library.js'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
  },
}
