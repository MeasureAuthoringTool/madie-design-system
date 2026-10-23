# @madie/madie-design-system

Shared style guide across the QPP program.

This repository houses `@madie/madie-design-system, a shared style guide/library for the QPP program. `@madie/madie-design-system` was built on top of bootstrap.

The purpose of `madie/madie-design-system` is to provide assets such as CSS, SCSS, JS, images and fonts to design a site with the visual style of `madie`. This allows multiple sites built in separate repositories and with different languages to share a global style without repeating styling code. The qpp-style library is primarily distributed on the node/npm ecosystem.

## System Requirements

Node 14.15.4 (LTS)

## Style Guide Documentation

The style guide is located at https://zeroheight.com/079543162/p/01a512-qpp-design-system

## Install and Use

Use [npm](https://www.npmjs.com/) to install madie-design-system. If you haven’t already installed the `@madie/madie-design-system` [module](https://www.npmjs.com/package/@madie/madie-design-system), run the following command to install madie-design-system into your project.


<!-- npm install --save @madie/madie-design-system``` -->

Once installed, all the assets from `madie-design-system` need to be consumed by your project. The simplest way to to this is by copying over the relevant assets with build commands and include them from the html with link tags. For example:

To build and develop locally, you can either initialize a storybook, or build and consume the linked project elsewhere.

1. Build shared assets required for react directory. From shared, and react directories:
```sh
$ npm install
```

2. Build react from within react:
```sh
$ npm run build-react
```

From here you can either initialize a story book as a testing playground from within react:
```sh 
$ npm run storybook
```

Or concurrently build and work locally with a consuming project:

Establish an npm link relationship with the repository you're working on:
In app repo root:
```sh
$ npm install
```

in library root:
```sh
$ npm install
$ npm link
```

In app repo:
```sh
$ npm link @madie/madie-design-system
```
Reflect changes in real time, from within react:
```sh
$ build-react-watch
```

In order to use styles associated with the library in a consuming project you will need to copy the `/fonts` and `images` directory from node_modules reference them with scss, and associate a font-path variable.

Create a `.scss` file and adding the following lines:

```scss
$font-path: "/public/fonts/"; // directory associated with webpack assett copy over. The required assets live in shared.
@import "@madie/madie-design-system/styles/third-party/legacy-bootstrap";
@import "@madie/madie-design-system/styles/qpp-style";
@import "@madie/madie-design-system/styles/qppds";
```

## Using React components

To use React components import into your project:

```js
import { Header, Footer, SideNav } from '@madie/madie-design-system/dist/react';
```

Available React components include

-   Breadcrumb,
-   Footer,
-   Header,
-   InfoModal,
-   Modal,
-   Pagination,
-   SideNav,
-   Spinner,
-   TabPanel,
-   Tabs

## Develop Locally with Storybook

While working on `@madie/madie-design-system` components and styles locally, Storybook can be a useful tool for development, testing, and documentation. For more information see the [Storybook Documentation](https://storybook.js.org/). To launch Storybook locally, run the following command:

-   `npm run storybook`

## Want to Contribute?
To publish a new release to the npm registry, create a pull request against the main branch with a commit message starting with 'Release ' followed by the new version number.

## Public Domain
This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived
through the CC0 1.0 Universal public domain dedication.		

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to
comply with this waiver of copyright interest.		

See the [formal LICENSE file](/LICENSE).


