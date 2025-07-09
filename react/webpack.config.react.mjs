import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default {
  mode: "production",
  entry: "./components/index.mjs",
  output: {
    filename: "index.mjs",
    path: path.resolve(__dirname, "dist/react"),
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
  plugins: [
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".svg"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
};
