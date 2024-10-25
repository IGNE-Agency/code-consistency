# My preferred eslint settings for personal projects

Currently contains config that can be used for SPA projects, made with Vite or CRA.

## Setting up

> Once for a project.

```
npm i -D eslint @igne-agency/eslint-config
```

Make sure that your project has `type: "module"` in `package.json`.  
Also tsconfig file name(s) should be `tsconfig.json` or `tsconfig.*.json` for import linting to work.

Add `eslint.config.js` to your project root:

```js
import { eslintConfigDefault } from "@igne-agency/eslint-config";

const config = [...eslintConfigDefault];
export default config;
```

Add a script in `package.json` to lint:

```json
"scripts": {
  "lint": "eslint"
}
```

This will lint all js/ts files in your project.  
It is possible to exclude files or folders by adding an object with the `ignores` property before `eslintConfigDefault`.

```js
import { eslintConfigDefault } from "@igne-agency/eslint-config";

const config = [
  { ignores: ["eslint.config.js", "test/**"] },
  ...eslintConfigDefault
];
export default config;
```

Make sure to add a step to the pipeline of your project that runs this script, so that code quality is automatically checked.

## Editor integration

> For every developer.

### VSCode

- Install the eslint extension: `dbaeumer.vscode-eslint`
- Sometimes it is necessary to reload the editor:  
  Show all commands (cmd+shift+P on mac) -> `Developer: reload window`
- Some things can be auto-fixed by eslint. On mac press: `[option]+[l]`
  - Alternatively, you can configre VSCode to autofix on save:
  - Open VSCode's `settings.json` and add:
    ```json
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
    ```

## Issues

Make sure to [file an issue](https://github.com/IGNE-Agency/code-consistency/issues) if you find one!

## TODO

- NextJS provides a plugin, but it is not compatible with flat config. When it becomes available we'll create a separate shared config for NextJS.  
  For now you can use `eslintConfigDefault`.

Investigate:

- eslint-plugin-jsx-a11y (this may have significant impact on existing projects)
