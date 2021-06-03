const path = require('path');

module.exports = {
  extends: ['@react-native-community', 'airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'no-console': 'off', // console to be removed by terser-webpack-plugin
    // import
    'import/no-cycle': 'error',
    // promise
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    // prettier
    'prettier/prettier': 'error',
    // react
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/style-prop-object': 'off',
    // react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  plugins: [
    'prettier',
    'import',
    'promise',
    'jsx-a11y',
    'react',
    'react-hooks',
    'react-native',
    '@react-native-community',
    'jest',
  ],
  overrides: [
    {
      files: ['src/store/**/*Reducer.js'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
      alias: {
        map: Object.entries({
          '@': path.resolve(__dirname, './src'),
        }),
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
