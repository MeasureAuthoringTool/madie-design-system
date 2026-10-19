# Madie/madie-design-system React

This directory contains react implementations of the components for Madie.

## Testing

Use Node 20 to match CI. The test suite uses Jest 30, `babel-jest` 30, and
`jest-environment-jsdom` 30 (JSDOM 26).

```sh
npm ci
npm test
npm run coverage
```

To run selected suites, use `npm test -- --runTestsByPath test/components/Button.test.js`
or `npm test -- --testPathPatterns=Button`.

When updating tests, follow the [Jest 30 migration guide](https://jestjs.io/docs/upgrading-to-jest30).
Use canonical matcher names such as `toHaveBeenCalled` rather than the removed
`toBeCalled` aliases.
