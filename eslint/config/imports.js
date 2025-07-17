import pluginImport from 'eslint-plugin-import';

export default {
  plugins: {
    import: pluginImport,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          { pattern: '@/**', group: 'internal' },
          { pattern: '@entities/**', group: 'internal' },
          { pattern: '@features/**', group: 'internal' },
          { pattern: '@widgets/**', group: 'internal' },
          { pattern: '@shared/**', group: 'internal' },
          { pattern: '@models/**', group: 'internal' },
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-cycle': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never' },
    ],
  },
};
