# QPP-Style Shared

## SVG Files

If a new icon is needed for the QPP design system, please add it to `./images/icons/svg`.
Currently, the qpp-style-angular build automatically bundles these icons into the library build.

When adding a new icon, please run the minifier tool `svgo` on the new file to help cut down on bundle size.

To minify all svgs in the `./images/icons` directory. From the `/shared` directory, run

```bash
npm run minify-all-svgs
```

If you want to only minify certain files you can run

```bash
npm run minify-svgs -- ./images/icons/svg/your-icon.svg ./images/icons/svg/your-other-icon.svg  -o ./images/icons/svg/your-icon.svg ./images/icons/svg/your-other-icon.svg
```

## Adding new SVGs

When adding a new SVG file, be sure to remove any set width and height values from the .svg and instead add a viewbox attribute to allow for SVG dimension scaling

```
viewBox="0 0 x y"
```

Where x is the default value to scale the width off of and y is the default value to scale the height off of.
