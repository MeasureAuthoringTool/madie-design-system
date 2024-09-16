module.exports = {
    stories: [
        "../components/**/*.@(mdx|stories.@(js|jsx))",
        "../lib/**/*.@(mdx|stories.@(js|jsx))"
    ],

    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-storysource",
        "@storybook/addon-knobs",
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
        "@storybook/addon-backgrounds",
        "@storybook/addon-viewport",
        "@storybook/addon-postcss",
        "@storybook/addon-webpack5-compiler-babel"
    ],

    webpackFinal: async (config) => {
        // do mutation to the config

        config.module.rules.push({
            test: /\.scss$/,
            resolve: {
                extensions: [".scss", ".sass"],
            },
            use: [
                { loader: "style-loader" },
                {
                    loader: "css-loader",
                    options: { sourceMap: true, importLoaders: 1 },
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        });

        return config;
    },

    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },

    docs: {},

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};
