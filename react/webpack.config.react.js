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
    devtool: "source-map",
    module: _module,
    plugins,
    resolve: {
        extensions: [".js", ".jsx", ".json", ".svg", "*"],
    },
    optimization,
    externals: { react: "react" },
};
