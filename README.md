# React Redux Template

## Getting started

1. git clone `https://github.com/netweaverdlw/react-redux-template.git`
2. run `npm install` or `yarn` from the root directory
3. run `npm start`
4. Open `localhost:3010` in your browser
5. For deployment to production, execute `npm run dist`

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run dist](#npm-run-dist)
- [Supported Language Features and Polyfills](#supported-language-features-and-polyfills)
- [Syntax Highlighting in the Editor](#syntax-highlighting-in-the-editor)
- [ESLint](#eslint)
- [Displaying Lint Output in the Editor](#displaying-lint-output-in-the-editor)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
- [Adding styles](#adding-styles)
- [Post-Processing CSS](#post-processing-css)
- [Adding Images](#adding-images)
- [Proxying API Requests in Development](#proxying-api-requests-in-development)
- [Running Tests](#running-tests)
  - [Filename Conventions](#filename-conventions)
  - [Test Scripts](#test-scripts)
  - [Writing Tests](#writing-tests)
  - [Testing Components](#testing-components)
  - [Coverage Reporting](#coverage-reporting)
- [Dependencies](#dependencies)
- [Webpack 2](#webpack-2)
  - [ES6 Modules](#es6-modules)
  - [Code Splitting with ES6](#code-splitting-with-es6)
  - [Tree shaking](#tree-shaking)
- [Git Hooks](#git-hooks)

## Folder Structure
```
public/
  favicon.ico
  index.html
src/
  modules/
  store/
    configure-store
  index.js
  reducers.js
  root.js
  router.js
webpack/
  env.js
  paths.js
  polyfills.js
  webpack.base.config.js
  webpack.dev.config.js
  webpack.prd.config.js
.editorconfig
.eslintignore
.gitignore
package.json
README.md
server.js
webpack.config.babel.js
yarn.lock
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. Only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3010](http://localhost:3010) to view it in the browser.

The page will hot-reload (if possible) when you make changes.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the jest test runner to run all the tests defined in the src directory.


### `npm run dist`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Supported Language Features and Polyfills

This template supports a superset of the latest JavaScript standard by using the [babel-preset-latest](https://babeljs.io/docs/plugins/preset-latest/).
In addition to [ES2015](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [ES2016 Exponentiation operator](https://babeljs.io/docs/plugins/transform-exponentiation-operator/)
* [ES2017 Trailing function commas](https://babeljs.io/docs/plugins/syntax-trailing-function-commas/)
* [ES2017 async/await](https://babeljs.io/docs/plugins/transform-async-to-generator/)
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (stage 2 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) syntax.

Learn more about [different proposal stages](https://github.com/tc39/proposals).

Note that **the template only includes a few [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or consider using [babel-polyfill](https://babeljs.io/docs/usage/polyfill/)


## Syntax Highlighting in the Editor

To configure syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions.

## ESLint

All rules are defined in [eslint-config-dlw](https://github.com/Stvenoo/eslint-config-dlw).
Submit an issue or pull request if you want to request changes. All rules can easily be overridden in the rules section located in `package.json > eslintConfig`, based on your preferences.

## Displaying Lint Output in the Editor

You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

>**Atom users**

You need to install the following packages in atom:

* [linter](https://atom.io/packages/linter)
* [linter-eslint](https://github.com/AtomLinter/linter-eslint)

If you want to lint your errors automatically, you can check the box `Fix errors on save` in the settings of the linter-eslint package.

## Installing a Dependency

You can install other dependencies with npm or yarn

```
yarn add <library-name>
npm install --save <library-name>
```

## Importing a Component

This project setup supports ES6 modules thanks to Babel.
While you can still use require() and module.exports, I encourage you to use [import and export](http://exploringjs.com/es6/ch_modules.html) instead.

## Adding styles

All local CSS files are parsed using [CSS-modules](https://github.com/css-modules/css-modules).
CSS Modules is not an official spec or an implementation in the browser but rather a process in the build step that changes class names and selectors to be scoped to the component.

```css
.button {
  padding: 20px;
}
```

```javascript
import React from 'react';
import styles from './Button.css';

const Button = (props) => {
  return <div className={styles.button} />;
}
```

The generated CSS might look like:

```css
.app---button---1nFrV {
  padding: 20px;
}
```

Adding styles from **dependencies** are not parsed using CSS modules as this would break the package!

```javascript
import 'font-awesome/css/font-awesome.css';

const Button = (props) => {
  // works as excepted
  return <div className='fa fa-car' />;
}
```

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them.<br />
In production, all CSS files will be concatenated into a single minified .css file in the dist folder.

## Post-Processing CSS

All your CSS files are automatically vendor prefixed through [Autoprefixer](https://github.com/postcss/autoprefixer) so you don’t need to worry about it.

For example, this:

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```
becomes this:
```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
```

Next to prefixing your CSS files for production, a set of standard rules are enforced using [Stylelint](https://stylelint.io/) with the [standard config](https://github.com/stylelint/stylelint-config-standard).

## Adding Images

With Webpack, using static assets like images and fonts works similarly to CSS.

You can import an image right in a JavaScript module. This tells Webpack to include that image in the bundle. Unlike CSS imports, importing an image or a font gives you a string value. This value is the final image path you can reference in your code.

```javascript
import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

This works in CSS too:
```css
.Logo {
  background-image: url(./logo.png);
}
```

## Proxying API Requests in Development

To tell the development server to proxy any unknown requests to your API server in development, you can provide a `proxyUrl` in the server.js file.
Standard only requests to **`/api` endpoints are proxied** but this can also be changed in the server.js file.

## Running Tests

This template uses [Jest](https://facebook.github.io/jest/) as its test runner. Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

- Files with .js suffix in __tests__ folders.
- Files with .test.js suffix.
- Files with .spec.js suffix.
The .test.js / .spec.js files (or the __tests__ folders) can be located at any depth under the `src` top level folder.

It is recommended to put the test files (or __tests__ folders) next to the code they are testing so that relative imports appear shorter.

### Test Scripts

When you run `npm test`, Jest will do a single test run and output the result in the command line interface.
You can also run `npm test:watch`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

### Writing Tests

To create tests, add `it()` blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in expect() global function for making assertions. A basic test could look like this:

```javascript
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](http://facebook.github.io/jest/docs/expect.html).
You can also use [jest.fn() and expect(fn).toBeCalled()](http://facebook.github.io/jest/docs/expect.html#tohavebeencalled) to create “spies” or mock functions.

### Testing components

Via enzyme TODO

### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES6
Run `npm test:cov` to include a coverage report like this:

![coverage report](http://i.imgur.com/m3U6gQM.png)

For now only coverage from actions, reducers and selectors is collected, as defined in `package.json > jest`

## Dependencies

- [React](https://facebook.github.io/react/): A JavaScript library for building user interfaces
- [React DOM](https://www.npmjs.com/package/react-dom): Entry point of the DOM-related rendering paths
- [React Router](https://github.com/ReactTraining/react-router): Declarative routing for React
- [Redux](http://redux.js.org/): A predictable state container for JavaScript apps
- [React Redux](https://github.com/reactjs/react-redux): Official React bindings for Redux
- [Redux Thunk](https://github.com/gaearon/redux-thunk): Thunk middleware for Redux
- [Redux Actions](https://github.com/acdlite/redux-actions): Flux Standard Action utilities for Redux
- [Reselect](https://github.com/reactjs/reselect): Selector library for Redux

## Webpack 2

### ES6 Modules

Webpack 2 brings native support ES6 Modules. This means webpack now understands import and export without them being transformed to CommonJS.

### Code Splitting with ES6

The ES6 Loader spec defines `System.import` as method to load ES6 Modules dynamically on runtime.
Webpack threads `System.import` as splitpoint and puts the requested module in a separate chunk. [code-splitting](https://webpack.js.org/guides/code-splitting/)

`System.import` takes the module name as argument and returns a Promise.

### Tree shaking

The static nature of ES6 Modules allows some new kind of optimizations. For example in many cases it's possible to detect which exports are used and which aren't used. [tree-shaking](https://webpack.js.org/guides/tree-shaking/)

In cases in which webpack can say for sure that an export isn't used it omits the statement which exposes the export to other modules. Later the minimizer may flag the declaration as unused and omits it.

## Git hooks

The [Husky](https://github.com/typicode/husky) library is used to run `npm test` before each `git push`. If the tests fail, `git push` will abort without pushing anything. You can skip the tests and force push by passing the `--no-verify` option.
