# Code Consistency

Provides configs and docs to promote and enforce code consistency between projects

- [eslint config](./packages/eslint-config-igne)
- [prettier config](./packages/prettier-igne)

## Contributing

You need to either be a part of the [IGNE Agency organization](https://github.com/IGNE-Agency), or fork and make a pull request.  
For organization members, note: the main branch is protected, so you need to make a pull request.

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
