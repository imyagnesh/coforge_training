module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
      node: {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
        ],
        paths: ['~'],
      },
    },
  },
};
