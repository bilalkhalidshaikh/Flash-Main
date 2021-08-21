/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const customWebpackConfig = {
  resolve: {
    extensions: ['.js', '.jsx', '.stories.js'],
    alias: {
      '@flash/*': path.resolve(__dirname, 'src/*'),
      '@flash/components': path.resolve(__dirname, 'src/components/'),
      '@flash/images': path.resolve(__dirname, 'public/images/'),
      '@flash/storybook': path.resolve(__dirname, 'src/storybook/'),
      '@flash/theme': path.resolve(__dirname, 'src/theme/'),
      '@flash/services': path.resolve(__dirname, 'src/services/'),
    },
  },
};

module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
  customWebpackConfig,
};
