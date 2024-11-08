import { RuleConfigSeverity } from '@commitlint/types';

module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  formatter: '@commitlint/format',
  rules: {
    'body-leading-blank': [RuleConfigSeverity.Error, 'always'],
    'footer-leading-blank': [RuleConfigSeverity.Error, 'always'],
    'scope-empty': [RuleConfigSeverity.Error, 'never'],
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'config',
        'profile',
      ],
    ],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
  },
  ignores: [(commit: string): boolean => commit === 'skip'],
  defaultIgnores: true,
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
