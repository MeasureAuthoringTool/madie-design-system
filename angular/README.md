# qpp-style-angular

This library was built to develop and distribute common angular components using common styling for the QPP application.
It also contains an example angular application that can be used to test existing and new components.

## Structure

The repository follows the best practices defined by angular-cli. The root directory was generated as a basic angular application.
Within the application directory, `ng g library qpp-style-angular` was executed to generate the projects folder and supporting library configuration.
All component development occurs in the `project` directory. Anything outside of `project` is strictly for the example application.

## Installation

The library can be installed via npm with `npm i @cmsgov/qpp-style-angular` or with yarn via `yarn add @cmsgov/qpp-style-angular`.

## Run Local Wiki
`npm start` will start up a local wiki served at `http://localhost:4200`

## Usage

`cms` is the library prefix. This means that all component and directive names are by default generated with `cms` at the beginning. Using the `Dropdown` module as an example, `cms-dropdown` is the component selector and `cmsDropdown` is the the directive selector.

## How to set up the project for local development

For instructions related to the qpp-style-angular set-up and linking the library to your project, access this README [here](./projects/qpp-style-angular/README.md)

## Release Workflow

1. Checkout a feature branch from main and make your changes

2. Open a PR to merge your feature branch into main.

3. Once main has enough changes to warrant a release, a release branch should be created by branching off of main. (_NOTE: Coordinate with the rest of the team to determine when to create a release_).
   - release branch naming convention should be `release/qpp-style-angular/x.x.x`

4. (Optional) Once a release branch becomes available, a beta version should be published to npm so that consumers can test the potential release. [How to publish a beta version](#how-to-publish-a-beta-version)

5. For fixes/changes that need to be made to a potential release, you should branch off of the release branch and open a PR to merge back into it. Anytime changes are made to a release branch, a new beta version should be published. [How to publish a beta version](#how-to-publish-a-beta-version)

6. Once a beta release is ready to become a full version, you can publish a new version: [How to publish a version](#how-to-publish-a-version)


### How to publish a beta version

1. In the release branch update `projects/qpp-style-angular/package.json` version with the appropriate beta version. All beta versions should have `-beta.X` appended to them. For example, for `release/qpp-style-angular/1.2.0` branch, the version should read `1.2.0-beta.0`.
2. Once the version is updated you can publish the beta version using:

    1. `npm run build:lib`
    2. `cd /dist/qpp-style-angular`
    3. `npm publish --tag beta`

3. For subsequent beta releases, the final number in the version should be incremented. For example, the next beta version after `1.2.0-beta.0` would be `1.2.0-beta.1`.

### How to publish a version

1. In the release branch update `projects/qpp-style-angular/package.json` version with the appropriate version. For example `1.2.0-beta.0` would be updated to `1.2.0`.
   - update the version in [package.json](./projects/qpp-style-angular/package.json) to match the release version
   ```shell
         cd angular/projects/qpp-style-angular
         npm version --no-git-tag-version patch
   ```
   - Commit and push the changes.
   ```text
      Example Commit Message:
      update qpp-style-angular version to 1.2.6
   ```
2. Once the version is updated you can publish by:

    1. `npm run build:lib`
    2. `cd dist/qpp-style-angular`
    3. `npm publish`
3. Once the release has been published, open a PR to merge release into main. Follow the example in this [PR](https://github.com/CMSgov/qpp-style/pull/874)

## Want to Contribute?

Want to file a bug or contribute some code? Read up on our guidelines for [contributing].

[contributing]: /.github/CONTRIBUTING.md

## Public Domain
This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived
through the CC0 1.0 Universal public domain dedication.

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to
comply with this waiver of copyright interest.

See the [formal LICENSE file](/LICENSE).
