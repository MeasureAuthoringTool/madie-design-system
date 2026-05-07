module.exports = {
    roots: ["<rootDir>"],
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(j|t)sx?$": "babel-jest",
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    moduleNameMapper: {
        "^twin.macro$": "<rootDir>/test/__mocks__/twin.macro.js",
        "^styled-components/macro$": "<rootDir>/test/__mocks__/styled-components-macro.js",
    },
    globals: {
        "ts-jest": {
            tsconfig: {
                jsx: "react-jsx",
            },
            useEsm: true,
        },
    },
};
