const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config) => {
    // do mutation to the config

    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, '..', 'fonts/'),
            to: 'fonts/',
          },
          {
            from: path.join(__dirname, '..', 'images/'),
            to: 'images/',
            force: true,
          },
        ],
      })
    );

    config.module.rules.push({
      test: /\.scss$/,
      resolve: {
        extensions: ['.scss', '.sass'],
      },
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: { sourceMap: true, importLoaders: 1 },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.html$/i,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: true,
            interpolation: false,
          },
        },
      ],
    });

    config.module.rules = config.module.rules.map((data) => {
      if (/svg\|/.test(String(data.test)))
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
      return data;
    });

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    });

    return config;
  },
};
