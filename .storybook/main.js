const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [],
  framework: '@storybook/react',

  reactOptions: {
    strictMode: true,
  },
};
