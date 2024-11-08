/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss'],
  ignoreFiles: [
    'dist/**/*.css',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'function-no-unknown': null,
    'no-descending-specificity': [
      true,
      {
        ignore: ['selectors-within-list']
      }
    ],
    'no-empty-source': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ],
    'scss/function-no-unknown': true,
    'import-notation': 'string',
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message: function expected(selectorValue) {
        return `Expected class selector '${selectorValue}' to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
      },
      },
    ],
  }
};
