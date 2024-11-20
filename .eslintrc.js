module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    require.resolve('@umijs/fabric/dist/eslint'),
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules', 'dist'],
  rules: {
    'linebreak-style': ['error', 'unix'],
  },
};
