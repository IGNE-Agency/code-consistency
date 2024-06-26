# Code Consistency

Provides configs and docs to promote and enforce code consistency between projects

- [eslint config](./packages/eslint-config-igne)
- [prettier config](./packages/prettier-igne)

## Contributing

You need to either be a part of the [IGNE Agency organization](https://github.com/IGNE-Agency), or fork and make a pull request.  
For organization members, note: the main branch is protected, so you need to make a pull request.

### Commit messages

We use conventional-commits with the [angular preset](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-angular/README.md). Please write proper commit messages; they will be used to auto-generate the changelog.

One of the following scopes are mandatory:

- `repo` for non-package stuff
- `eslint` for the eslint-config-igne package
- `prettier` for

Examples:

```sh
git commit -m"feat(repo): added conventional commits config"

git commit -m"docs(prettier): explain vscode setup"

git commit -m"feat(eslint): add rule X
BREAKING CHANGE: this may cause errors in consuming packages"
```

If you made changes to both the main repo and a package, create separate commits.  
More info: [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Publishing

Before you can publish, you:

- Need to be part of the @Igne-agency npm organization
- Log in to npm
  - Either from the CLI: `npm login`
  - OR create a granular access token in npm and add it to `~/.npmrc` manually  
    `//registry.npmjs.org/:_authToken=<token>`
- On your computer go to the root of this repo and make sure your changes are committed.
- Now run `npx lerna publish` to publish the changed packages. You'll have to choose what kind of version bump to give. Make sure to follow the [guidelines on semantic versioning](https://semver.org/).

## TODO

- Automate publishing using github workflow on merge with main.
