# Code Consistency

Provides configs and docs to promote and enforce code consistency between projects

## Publishing

Before you can publish, you:

- Need to be part of the @Igne-agency npm organization
- Log in to npm
  - Either from the CLI: `npm login`
  - OR create a granular access token in npm and add it to `~/.npmrc` manually  
    `//registry.npmjs.org/:_authToken=<token>`
- On your computer go to the root of this repo and make sure your changes are committed.
- Now run `npx lerna publish` to publish the changed packages. You'll have to choose what kind of version bump to give. Make sure to follow the [guidelines on semantic versioning](https://semver.org/).

# TODO

- Integrate lerna in a github workflow so it automatically gets published on merge with main.
  - Ideally it should be coupled with something like [semantic-release](https://semantic-release.gitbook.io) so version bumping is automatic. However I think semantic-release doesn't work with monorepo's...
