const React = require("react");

/**
 * Returns a tagged-template function that
 * produces a valid React component.
 */
const createMockTag = (tag) => {
  return () =>
    React.forwardRef(({ children, ...props }, ref) =>
      React.createElement(tag, { ref, ...props }, children)
    );
};

const proxy = new Proxy(
  {},
  {
    get: (_target, key) => createMockTag(key),
  }
);

module.exports = {
  __esModule: true,
  default: proxy,
};