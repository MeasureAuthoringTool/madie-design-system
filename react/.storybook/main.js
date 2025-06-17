module.exports = {
    stories: [
        "../components/**/*.@(mdx|stories.@(js|jsx))",
        "../lib/**/*.@(mdx|stories.@(js|jsx))"
    ],

    addons: [
    "@storybook/addon-links", 
    "@storybook/addon-webpack5-compiler-babel", 
    "@storybook/addon-docs"],

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
        // the below lines add hot reload, but somehow put CI/CD into a hanging state
        // config.watchOptions = {
        //     aggregateTimeout: 300, // Delay before rebuilding after the first change
        //     poll: 1000,            // Check for changes every second
        //     ignored: /node_modules/, // Ignore node_modules to improve performance
        // };

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
