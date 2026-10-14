# Madie/madie-design-system React

This directory contains react implementations of the components for Madie.

## Development Toolchain

Install [Volta](https://volta.sh), then run commands from this directory. Volta
automatically uses the exact Node and npm versions in the `volta` field of
[package.json](package.json). The `engines` field warns about unsupported versions
but does not install or switch them. CI reads the same pins.

```sh
npm ci
npm test
npm run build-storybook
```

Without Volta, use the pinned versions explicitly:

```sh
npx --yes --package=node@20.20.2 --package=npm@10.9.9 npm ci
```

When updating the toolchain, update the `volta` pins, `engines` ranges, and the
fallback command above together. Regenerate the lockfile with the pinned npm
version, then verify `npm ci`, tests, and builds before committing.

Keep the main Storybook packages on the same exact version when updating them.
The knobs addon, legacy addons API, and webpack compiler addon use separate
version lines and must be checked for compatibility rather than assigned that
version automatically.
