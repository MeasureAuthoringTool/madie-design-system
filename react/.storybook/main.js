const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|mdx)',
    '../lib/**/*.stories.@(js|jsx|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-postcss',
  ],
  webpackFinal: async (config) => {
    // do mutation to the config

    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, '..', '..', 'shared', 'fonts/'),
          to: 'fonts/',
        },
        {
          from: path.join(__dirname, '..', '..', 'shared', 'images/'),
          to: 'images/',
          force: true,
        },
      ])
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
      test: /\.svg$/,
      use: [
        'raw-loader',
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              { removeTitle: true },
              { convertColors: { shorthex: false } },
              { convertPathData: false },
            ],
          },
        },
      ],
    });

    // Modify default storybook SVG loader so we can use the one expected by qpp-style
    // NOTE: When updating storybook dependency, double check this override.
    const staticAssetLoader = config.module.rules.find((rule) => {
      const regExp = rule.test;
      const isRegExp = regExp && typeof regExp.test === 'function';
      return isRegExp && regExp.test('.svg');
    });

    if (staticAssetLoader) {
      // remove svg matching from storybook's default static asset loader
      staticAssetLoader.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
    }

    return config;
  },
};
