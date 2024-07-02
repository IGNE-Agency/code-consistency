# Prettier config for Igne agency

Shared config for prettier, so all our projects look nice and recognizable.

## Setting up

Once for a project.

```
npm i -D @igne-agency/prettier prettier
```

Add prettier to `package.json`:

```json
"prettier": "@igne-agency/prettier",
```

Add a script to run prettier in :

```json
"scripts": {
  "format": "prettier . --check"
}
```

Make sure to add a step to the pipeline of your project that runs this script.

## Editor integration

For every developer.

### VSCode

- Install the prettier extension: `esbenp.prettier-vscode`
- Open VSCode's `settings.json` and add:  
  `"editor.defaultFormatter": "esbenp.prettier-vscode",`
- Related settings you may want to add are:
  ```
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  ```
