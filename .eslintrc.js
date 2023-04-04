module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'airbnb'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'max-len': ['error', { code: 200 }],
    'jsx-quotes': [1, 'prefer-single'],
    '@next/next/no-img-element': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off'
  }
};
