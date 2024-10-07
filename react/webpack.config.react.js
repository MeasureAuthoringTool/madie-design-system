const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const ESLintPlugin = require('eslint-webpack-plugin');

const _module = {
    rules: [
        {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        sassOptions: {
                            includePaths: ["styles"],
                        },
                    },
                },
                "style-loader",
            ],
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
            use: [
                "raw-loader",
                {
                    loader: "svgo-loader",
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

const optimization = {
    minimizer: [new TerserPlugin()],
};

const plugins = [
    new MiniCssExtractPlugin({
        filename: "default.css",
    }),
    new HtmlWebpackPlugin(),
];

module.exports = {
    mode: "production",
    entry: "./components/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist/react"),
        library: "$",
        libraryTarget: "umd",
        globalObject: "this",
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/, // Don't watch files in node_modules
        aggregateTimeout: 300, // Delay before rebuilding after the first change (in ms)
        poll: 1000, // Check for changes every second (useful for environments that don't notify changes)
      },
      devServer: {
        // static: path.join(__dirname, "dist/react"),
        // compress: true,
        // port: 3000, // Set the desired port
        hot: true, // Enable hot module replacement
        watchFiles: ["src/**/*", "components/**/*"], // Watch these files
    },
    devtool: "source-map",
    module: _module,
    plugins,
    resolve: {
        extensions: [".js", ".jsx", ".json", ".svg", "*"],
    },
    optimization,
    externals: { react: "react" },
};
