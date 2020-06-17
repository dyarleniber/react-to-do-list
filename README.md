<h1 align="center">
  React to-do list
</h1>

<p align="center">
  :clipboard: to-do list using JavaScript, React, Redux, Hooks, Bootstrap and Jest.
</p>

<p align="center">
  <a href="https://github.com/dyarleniber/react-to-do-list/actions?query=workflow%3ACI%2FCD">
    <img alt="CI/CD" src="https://github.com/dyarleniber/react-to-do-list/workflows/CI/CD/badge.svg">
  </a>
  <a href="https://codecov.io/gh/dyarleniber/react-to-do-list">
    <img alt="Coverage" src="https://img.shields.io/codecov/c/github/dyarleniber/react-to-do-list">
  </a>
  <a href="https://github.com/dyarleniber/react-to-do-list/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/dyarleniber/react-to-do-list">
  </a>
</p>

<p align="center">
  <a href="https://dyarleniber.github.io/react-to-do-list/">Live Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-configuration">Configuration</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

to-do list buit with [React](https://reactjs.org), [Redux](https://redux.js.org), Hooks and [Bootstrap](https://getbootstrap.com).

As an alternative to the existing `connect()` Higher Order Component in Redux, it was used the set of hook APIs provided by React Redux to subscribe to the Redux store and dispatch actions, without having to wrap the components in `connect()`.

The code base is 100% covered by automated tests with [Jest](https://jestjs.io) and [Enzyme](https://enzymejs.github.io/enzyme).

The project is hosted on [GitHub Pages](https://pages.github.com). And a CI/CD workflow created on [GitHub Actions](https://github.com/features/actions) is responsible for automatically test the source code, generate a coverage report and upload it on [Codecov](https://codecov.io), build and deploy the project on [GitHub Pages](https://pages.github.com). All these jobs are activated by a push or pull request event on master branch.

## :gear: Configuration

To clone and run this application, you’ll need to have [Git](https://git-scm.com) and [Node.js v10.16](https://nodejs.org) or higher installed on your computer.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dyarleniber/react-to-do-list.git

# Go into the repository folder
$ cd react-to-do-list

# Install dependencies
$ npm install

# Run the app in the development mode (open http://localhost:3000 to view it in the browser)
$ npm start
```

To run the tests (in the interactive watch mode), run the following command:

```bash
$ npm test
```

For more information about the available scripts, access the [Create React App documentation](https://create-react-app.dev/docs/available-scripts/).

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/dyarleniber/react-to-do-list/blob/master/LICENSE) for more information.

---

Made with ♥ by Dyarlen Iber :wave: [Get in touch!](https://dyarleniber.com)
