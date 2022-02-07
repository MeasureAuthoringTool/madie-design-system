# qpp-style

Shared style guide across the QPP program.

This repository houses `qpp-style`, a shared style guide/library for the QPP program. `qpp-style` was built on top of bootstrap.

The purpose of `qpp-style` is to provide assets such as CSS, SCSS, JS, images and fonts to design a site with the visual style of `qpp.cms.gov`. This allows multiple sites built in separate repositories and with different languages to share a global style without repeating styling code. The qpp-style library is primarily distributed on the node/npm ecosystem.

## System Requirements

Node 14.15.4 (LTS)

## Style Guide Documentation

The style guide is located at https://qpp.cms.gov/style-guide

## Install and Use

Use [npm](https://www.npmjs.com/) to install qpp-style. If you haven’t already installed the `qpp-style` [module](https://www.npmjs.com/package/qpp-style), run the following command to install qpp-style into your project.

```
npm install --save qpp-style
```

Once installed, all the assets from `qpp-style` need to be consumed by your project. The simplest way to to this is by copying over the relevant assets with build commands and include them from the html with link tags. For example:

1. Build all assets that came with the module:
    ```sh
    $ pushd .
    $ cd ./node_modules/qpp-style
    $ npm install
    $ npm start
    ```
1. Copy assets to project directory:
    ```sh
    $ popd
    $ mkdir -p public
    $ cp -r ./node_modules/qpp-style/build/* public
    ```
1. Create webpage:
    ```sh
    $ touch public/index.html
    ```
1. Link to css in html:
    ```html
    <html lang="en">
        <head>
            <link href="/css/qpp-style.css" type="text/css" rel="stylesheet" />
        </head>
        <body>
            <h1>QPP Quality Payment Program</h1>
        </body>
    </html>
    ```

Another way to use the style is by importing the sass into your project. This can be done in the following way:

1. Copy the fonts to `/fonts`:

    ```sh
    $ mkdir -p fonts
    $ cp -r ./node_modules/qpp-style/fonts/* fonts
    ```

1. Create a `.scss` file and adding this line:

```scss
@import '../node_modules/qpp-style/styles/qpp_style';
```

## Using React components

To use React components import into your project:

```js
import { Header, Footer, SideNav } from 'qpp-style/dist/react';
```

Available React components include

-   Breadcrumb,
-   Footer,
-   Header,
-   InfoModal,
-   Modal,
-   SideNav,
-   Spinner,
-   TabPanel,
-   Tabs

## Develop Locally with Storybook

While working on `qpp-style` components and styles locally, Storybook can be a useful tool for development, testing, and documentation. For more information see the [Storybook Documentation](https://storybook.js.org/). To launch Storybook locally, run the following command:

-   `npm run storybook`

## Want to Contribute?

Want to file a bug or contribute some code? Read up on our guidelines for [contributing].

[contributing]: /.github/CONTRIBUTING.md

## Public Domain
This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived
through the CC0 1.0 Universal public domain dedication.		

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to
comply with this waiver of copyright interest.		

See the [formal LICENSE file](/LICENSE).


