// @ts-check
const eslint = require('@eslint/js');
const tsEslint = require('typescript-eslint');
const angular = require('angular-eslint');
const stylistic = require('@stylistic/eslint-plugin');
const perfectionist = require('eslint-plugin-perfectionist');
const jasmine = require('eslint-plugin-jasmine');

const ignores = [
  'src/main.ts',
  'src/index.html',
  'src/stories/**/*',
];

module.exports = tsEslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.all,
      ...tsEslint.configs.stylistic,
      ...angular.configs.tsAll,
      stylistic.configs['disable-legacy'],
      stylistic.configs['all-flat'],
      perfectionist.configs['recommended-alphabetical'],
    ],
    plugins: {
      '@stylistic': stylistic,
    },
    ignores,
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'complexity': ['error', 5],
      'arrow-body-style': ['error', 'as-needed'],
      'class-methods-use-this': 'off',
      'consistent-return': 'off',
      'default-param-last': 'off',
      'dot-notation': 'off',
      'func-names': ['error', 'as-needed'],
      'id-length': [
        'error',
        {
          min: 3,
          max: 35,
          exceptions: ['x', 'y', 'z', 'id'],
          properties: 'never'
        },
      ],
      'init-declarations': 'off',
      'max-lines': [
        'error',
        {
          max: 500,
        },
      ],
      'max-lines-per-function': [
        'error',
        {
          max: 200,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'max-nested-callbacks': ['error', 5],
      'max-params': 'off',
      'new-cap': [
        'error',
        {
          capIsNewExceptions: [
            'Attribute', 'Component', 'ContentChild', 'ContentChildren', 'Directive', 'Host', 'HostBinding',
            'HostListener', 'Inject', 'Injectable', 'Input', 'NgModule', 'Optional', 'Output', 'Pipe', 'Self',
            'SkipSelf', 'ViewChild', 'ViewChildren',
          ]
        },
      ],
      'no-array-constructor': 'off',
      'no-dupe-class-members': 'off',
      'no-empty-function': 'off',
      'no-implied-eval': 'off',
      'no-invalid-this': 'off',
      'no-loop-func': 'off',
      'no-negated-condition': 'warn',
      'no-magic-numbers': 'off',
      'no-redeclare': 'off',
      'no-restricted-imports': 'off',
      'no-return-await': 'off',
      'no-shadow': 'off',
      'no-throw-literal': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'one-var': ['error', 'never'],
      'prefer-exponentiation-operator': 'warn',
      'prefer-destructuring': 'off',
      'prefer-numeric-literals': 'warn',
      'prefer-object-has-own': 'warn',
      'prefer-object-spread': 'warn',
      'prefer-promise-reject-errors': 'off',
      'prefer-regex-literals': 'warn',
      'require-await': 'off',
      'sort-keys': 'off',
      'sort-imports': 'off',
      'symbol-description': 'warn',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/class-methods-use-this': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports'
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowedNames: ['loadComponent', 'loadChildren']
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'no-public'
        },
      ],
      '@typescript-eslint/max-params': [
        'error',
        {
          max: 5,
        },
      ],
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'signature',
            'call-signature',

            'abstract-field',
            'static-field',

            'decorated-field',
            'private-field',
            '#private-field',
            'protected-field',
            'public-field',

            'constructor',

            'decorated-get',
            'decorated-set',

            'public-get',
            'public-set',

            'public-method',

            'protected-get',
            'protected-set',

            'protected-method',

            'private-get',
            'private-set',

            'private-method',

            '#private-get',
            '#private-set',

            '#private-method'
          ]
        },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'method'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['variable'],
          format: ['UPPER_CASE', 'strictCamelCase']
        },
        {
          selector: ['objectLiteralProperty'],
          format: null,
          filter: {
            regex: '^[A-Z]$',
            match: false,
          },
        },
        {
          selector: ['objectLiteralProperty'],
          format: ['camelCase', 'snake_case'],
        },
        {
          selector: [
            'variable',
            'function',
            'parameter',
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor'
          ],
          format: ['strictCamelCase']
        },
        {
          selector: ['enumMember', 'class', 'interface', 'enum'],
          format: ['StrictPascalCase']
        }
      ],
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['constructors'],
        }
      ],
      '@typescript-eslint/no-explicit-any': [
        'warn',
        {
          ignoreRestArgs: true,
          fixToUnknown: true
        }
      ],
      '@typescript-eslint/no-extraneous-class': [
        'error',
        {
          allowWithDecorator: true,
        },
      ],
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignoreEnums: false,
          ignoreNumericLiteralTypes: false,
          ignoreReadonlyClassProperties: false,
          ignoreTypeIndexes: false,
        },
      ],
      '@typescript-eslint/parameter-properties': [
        'error',
        {
          allow: ['readonly', 'public readonly', 'private readonly', 'protected readonly'],
        },
      ],
      '@typescript-eslint/prefer-enum-initializers': 'off',
      '@typescript-eslint/prefer-promise-reject-errors': 'warn',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@typescript-eslint/promise-function-async': [
        'error',
        {
          checkArrowFunctions: false,
        },
      ],
      '@typescript-eslint/require-array-sort-compare': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@stylistic/array-element-newline': [
        'error',
        'consistent',
      ],
      '@stylistic/arrow-parens': [
        'error',
        'as-needed',
      ],
      '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        }
      ],
      '@stylistic/comma-dangle': [
        'error',
        'always-multiline'
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always'
      ],
      '@stylistic/dot-location': [
        'error',
        'property',
      ],
      '@stylistic/function-call-argument-newline': [
        'error',
        'consistent',
      ],
      '@stylistic/function-paren-newline': [
        'error',
        'consistent',
      ],
      '@stylistic/generator-star-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      '@stylistic/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 2,
        },
      ],
      '@stylistic/indent-binary-ops': [
        'error',
        2,
      ],
      '@stylistic/lines-around-comment': ['warn'],
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
        }
      ],
      '@stylistic/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        }
      ],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
          multilineDetection: 'brackets',
        }
      ],
      '@stylistic/multiline-comment-style': [
        'error',
        'bare-block',
      ],
      '@stylistic/multiline-ternary': [
        'error',
        'always-multiline',
      ],
      '@stylistic/new-parens': [
        'error',
        'never',
      ],
      '@stylistic/newline-per-chained-call': [
        'error',
        {
          ignoreChainWithDepth: 3,
        }
      ],
      '@stylistic/no-confusing-arrow': [
        'error',
        {
          onlyOneSimpleParam: true,
        }
      ],
      '@stylistic/operator-linebreak': [
        'error',
        'before',
      ],
      '@stylistic/padded-blocks': [
        'error',
        'never',
      ],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['*'],
          next: [
            'break', 'block-like', 'continue', 'function', 'if', 'iife', 'multiline-block-like',
            'multiline-expression', 'return', 'switch', 'throw', 'try', 'while',
          ]
        }
      ],
      '@stylistic/quote-props': [
        'error',
        'consistent',
      ],
      '@stylistic/quotes': [
        'error',
        'single',
      ],
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        }
      ],
      '@stylistic/type-annotation-spacing': [
        'error',
        {
          after: true,
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          internalPattern: ['$*/**'],
          newlinesBetween: 'always',
          maxLineLength: undefined,
          groups: [
            ['builtin', 'external'],
            ['internal-type', 'internal'],
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
        },
      ],
      'perfectionist/sort-objects': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.tsAll,
      ...angular.configs.templateAll,
    ],
    rules: {
      '@angular-eslint/template/attributes-order': [
        'error',
        {
          'order': [
            'TEMPLATE_REFERENCE',
            'STRUCTURAL_DIRECTIVE',
            'TWO_WAY_BINDING',
            'INPUT_BINDING',
            'ATTRIBUTE_BINDING',
            'OUTPUT_BINDING',
          ],
        },
      ],
      '@angular-eslint/template/elements-content': 'warn',
      '@angular-eslint/template/i18n': 'off',
      '@angular-eslint/template/label-has-associated-control': 'off',
      '@angular-eslint/template/role-has-required-aria': 'warn',
      '@angular-eslint/template/valid-aria': 'warn',
    }
  },
  {
    files: ['*.spec.ts'],
    extends: [
      jasmine.configs.recommended
    ],
    rules: {
      'max-statements': ['error', 16]
    }
  }
);
