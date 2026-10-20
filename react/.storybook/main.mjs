export default {
    stories: ["../components/**/*.@(mdx|stories.@(js|jsx))"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        "@storybook/addon-docs"
    ],

    framework: {
        name: "@storybook/react-vite",
        options: {}
    },

    docs: {},

    typescript: {
        reactDocgen: "react-docgen"
    },

    // stories and components are .js files that contain JSX
    viteFinal: async (config) => {
        config.esbuild = {
            ...config.esbuild,
            loader: "jsx",
            include: /(components|lib|\.storybook)\/.*\.jsx?$/,
            exclude: [],
        };
        config.optimizeDeps = {
            ...config.optimizeDeps,
            esbuildOptions: {
                ...(config.optimizeDeps && config.optimizeDeps.esbuildOptions),
                loader: { ".js": "jsx" },
            },
        };
        return config;
    },
};
