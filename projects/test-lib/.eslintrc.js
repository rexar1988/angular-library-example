module.exports = {
  extends: "../../.eslintrc.json",
  ignorePatterns: ["!**/*"],
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.lib.json",
          "tsconfig.spec.json"
        ],
        tsconfigRootDir: __dirname
      },
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: ["ng", "form"],
            style: "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: ["m"],
            style: "kebab-case"
          }
        ]
      }
    }
  ]
}
