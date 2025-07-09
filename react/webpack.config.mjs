import path from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
// import pkg from "./package.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entry = ["./index.js"];

const _module = {
  rules: [
    {
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      exclude: /node_modules/,
    },
    {
      test: /\.(ttf|eot|woff|otf|woff2)$/,
      loader: "file-loader",
      options: {
        name: "fonts/[name].[ext]",
      },
    },
    {
      test: /\.svg$/,
      use: ["raw-loader", "svgo-loader"],
    },
  ],
};

const plugins = [
  new MiniCssExtractPlugin({ filename: "style.css" })
];

const resolve = {
  extensions: [".js", ".jsx", ".json", ".svg"],
};

const optimization = {
  minimize: true,
  minimizer: [new TerserPlugin()],
};

export default {
  mode: "production",
  entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    module: true,
    library: {
      type: "module",
    },
    environment: {
      module: true,
    },
  },
  experiments: {
    outputModule: true,
  },
  devtool: "source-map",
  module: _module,
  plugins,
  resolve,
  optimization,
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
};
