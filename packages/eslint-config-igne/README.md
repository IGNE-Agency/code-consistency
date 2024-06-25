# Eslint configs for Igne agency

Currently contains config that can be used for SPA projects, made with Vite or CRA.

## Setting up

```
npm install eslint-config-jorn-ts
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

## Editor integration

I recommend you setup your editor in a way that is comfortable to you to get early warning about eslint errors.

(will add instructions here...)

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
