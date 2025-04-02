module.exports = {
    roots: ["<rootDir>"],
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(j|t)sx?$": "babel-jest",
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    globals: {
        "ts-jest": {
            tsconfig: {
                jsx: "react-jsx",
            },
            useEsm: true,
        },
    },
};
