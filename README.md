[ ![Codeship Status for
CatchRelease/arbor](https://app.codeship.com/projects/0fd77eb0-aede-0136-de71-6acd4e02bc2c/status?branch=master)](https://app.codeship.com/projects/310054)
[![code style:
prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Arbor

Arbor is a set of React UI components for [Catch&Release's](https://www.catchandrelease.com/) design system.
It is built using [emotion](https://emotion.sh/) and [styled-system](https://github.com/jxnblk/styled-system).

## Getting Started

### Installation

Install the [Arbor package](https://www.npmjs.com/package/@catchandrelease/arbor) and its dependencies.

```
npm install --save @catchandrelease/arbor
```

or

```
yarn add @catchandrelease/arbor
```

### Usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Heading, theme } from '@catchandrelease/arbor';
import { ThemeProvider } from 'emotion-theming';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Heading.h1>Hello World</Heading.h1>
    </ThemeProvider>
  );
}

render(<App />, document.getElementById('app'));
```

The application must be wrapped in an emotion `ThemeProvider` in order to work.
You can import the base theme from arbor, or customize it and pass in your own.
See [emotion-theming](https://github.com/emotion-js/emotion/blob/master/docs/theming.md).

## ESLint

The project is setup to use ESLint. ESLint rules need to be managed in an
eslint-plugin. Our custom rules are defined in the `index.js` file of the
`./rules` folder. If you are testing a new or updated rule, you will need to run
the following to update the plugin in the node_modules folder:

```
yarn add --dev ./rules
```

Once you are happy with your rules, be sure to update the version in the
`package.json` file of the `./rules` folder so that the next person will get the
updated rule when he/she runs `yarn`. Resources: [Creating rules with ESLint
Docs](https://eslint.org/docs/developer-guide/working-with-rules), [AST
Explorer](https://astexplorer.net/), [Writing custom ESLint
rules](https://www.kenneth-truyers.net/2016/05/27/writing-custom-eslint-rules/)

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
