# Small Hyperapp template with testing included

Hyperapp template with Typescript & Parcel bundler. Small and fast!
Example unit and end to end test with Jest & Cypress.

[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

**What's inside?**

* `hyperapp` (Library for building web apps)

and for development time
* `parcel-bundler` (Blazing fast, zero configuration web application bundler)
* `ts-jest` (Delightful JavaScript Testing)
* `cypress` (Fast, easy and reliable testing for anything that runs in a browser)
* `tslint` (Linting Typescript code)
* `prettier-standard` (Code formatter)

Bundling is handled with parcel bundler (https://parceljs.org/) which provides fast bundles.

## Getting started

Clone and install deps

```
git clone https://github.com/tkivela/hyperapptemplate_ts.git
cd hyperapptemplate_ts
yarn
yarn start
```

Then open `http://localhost:1234` and edit `./src/` -files and press save. You must manually refresh browser window after editing sources. Bundling the application this way will generate unoptimized build with sourcemaps to 'build' directory.

## Directory structure

Majority of code lives in src directory:

```
src/
├── actions
├── components
├── state
├── index.ts
```

* actions: actions which modify the state
* components: components which can be using jsx
* state: application's state tree
* index.ts: main entry point

End to end browser tests are located in cypress -directory.


## Building for Production

```
yarn build
```

This will compile your TS/JS and copy your assets to the `dist` folder which
you can deploy wherever as a webpage.

## Testing

```
yarn test
```

Running formats and lints code (Prettier & Standard) and then runs unit tests (Jest) and end to end tests (Cypress). If there are any errors in the end to end tests the script will leave a screenshot of the browser window which reproduces the error to `cypress/screenshot` folder. Screenshot folder is automatically deleted with each test run. If you want to create a video of the e2e testing run automatically to `cypress/videos` folder, just change `videoRecording=false` to `videoRecording=true` from package.json.

In Linux environments test will end with `error Command failed with signal "SIGTERM"` even though all tests passed. This is a known error which is caused by terminating the webserver process after tests.


If you want to test steps in the Cypress UI first start the dev server (yarn start) and then run
```
yarn cy:open
```


I've included example tests for actions, UI snapshot with jest and end to end test with Cypress.
