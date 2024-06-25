# Eslint configs for Igne agency

Currently contains config that can be used for SPA projects, made with Vite or CRA.

## Setting up

Once for a project.

```
npm install @igne-agency/eslint-config-igne
```

Add `.eslintrc.cjs` to your project root:

```js
module.exports = {
  root: true,
  extends: 'eslint-config-jorn-ts',
}
```

Add a script in `package.json` to lint:

```json
"scripts": {
  "lint": "eslint ./src"
}
```

This will lint everything in the `./src` folder. If you need to lint more, you can adjust accordingly. It is also possible to exclude folders by adding an `.eslintignore` file in the root. It has the same syntax as `.gitignore`.

Make sure to add a step to the pipeline of your project that runs this script.

## Editor integration

For every developer.

- Install the eslint extension: `dbaeumer.vscode-eslint`
- Sometimes it is necessary to reload the editor:  
  Show all commands (cmd+shift+P on mac) -> `Developer: reload window`

## Common issues

If not listed here? [File a new one!](https://github.com/IGNE-Agency/code-consistency/issues)

### Double error

If you get double errors (eslint and ts), this is because of VS Codes built-in linter.  
[!double error](../../docs/assets/double-error.png)

You can disable it in your (workspace) settings with:

```
"javascript.validate.enable": false,
```

## TODO

- Test the current TS implementation (overrides) in a Vite TS project
- `eslint-plugin-simple-import-sort`
- Put rules in separate files, one per plugin/feature, so they can be included per stack config file
- Make stack specific exports: Expo, NextJS, (and typescript for each as well)

Investigate:

- eslint-plugin-jsx-a11y (this may have significant impact on existing projects)

### About flat config

The following packages do not support flat config, that is why we are not using eslint 9 yet:

- eslint-plugin-import
- eslint-import-resolver-node
- eslint-import-resolver-typescript
- eslint-plugin-react (almost - https://github.com/facebook/react/pull/28773#issuecomment-2147149016)
