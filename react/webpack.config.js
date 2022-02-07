const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');
const entry = ['./index.js'];

const _module = {
  rules: [
    {
      enforce: 'pre',
      test: /\.(js|jsx)?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(js|jsx)?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['styles'],
            },
          },
        },
        'sass-loader',
      ],
      exclude: /node_modules/,
    },
    {
      test: /\.(ttf|eot|woff|otf|woff2)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]',
      },
    },
    {
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
    },
  ],
};

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'default.css',
  }),
  // copy styles, images, fonts from shared directory
  new CopyWebpackPlugin([
    {
      from: path.join(__dirname, '..', 'shared', 'styles'),
      to: path.resolve(__dirname, 'styles'),
    },
    {
      from: path.join(__dirname, '..', 'shared', 'images'),
      to: path.resolve(__dirname, 'images'),
      force: true,
    },
    {
      from: path.join(__dirname, '..', 'shared', 'fonts'),
      to: path.resolve(__dirname, 'fonts'),
      force: true,
    },
  ]),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.DefinePlugin({
    buildVersion: JSON.stringify(pkg.version),
  }),
];

const resolve = {
  extensions: ['.js', '.jsx', '.json', '.svg', '*'],
  alias: {
    react: 'preact/compat',
    'react-dom': 'preact/compat',
  },
};

const optimization = {
  minimizer: [new TerserPlugin()],
};

const defaultConfig = (env, argv) => {
  return {
    mode: 'production',
    entry,
    output: {
      library: 'QPPStyle',
      libraryTarget: 'umd',
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: env.production === 'true' ? 'source-map' : 'eval-source-map',
    module: _module, // module is already defined
    plugins,
    resolve,
    optimization,
  };
};

const browserConfig = (env, argv) => {
  return {
    mode: 'production',
    entry,
    output: {
      libraryTarget: 'var',
      library: 'QPPStyle',
      filename: 'browser.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: env.production === 'true' ? 'source-map' : 'eval-source-map',
    module: _module, // module is already defined
    plugins,
    resolve,
    optimization,
  };
};

module.exports = [defaultConfig, browserConfig];
