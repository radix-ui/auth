module.exports = {
  extends: ['react-app', 'plugin:jsx-a11y/recommended', 'plugin:storybook/recommended'],
  plugins: ['jsx-a11y'],
  rules: {
    'react/jsx-pascal-case': [2, { allowNamespace: true }],
  },
};
