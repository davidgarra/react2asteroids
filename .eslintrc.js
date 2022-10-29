module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'error',
    'react-native/no-raw-text': 'warn',
    'react-native/no-single-element-style-arrays': 'warn',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/../[a-zA-Z]*/**'],
            message: 'File not exposed from the module. Consider exporting it from an index',
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
