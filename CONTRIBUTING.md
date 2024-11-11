# Contributing

This monorepo uses [changesets](https://github.com/changesets/changesets) to help with versioning the packages and automate the release process.  
[Read a short intro here](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)

## How to make changes

- Create a pull request for your changes.
- If your change should update the version of a package, run `npx changeset add`.
- Choose the version increment (major, minor, patch - read below when to use what).
- Describe your change (edit the generated file if you need to).
- Commit the changeset markdown file.

Note that the changeset will end up in the changelog file of the related package!

## Choose version increment

> [adding a chagneset docs](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md#i-am-in-a-multi-package-repository-a-mono-repo)

When running `npx changeset add` you will choose what kind of change it is. It should warn the consumer that there's a certain impact when updating.

Examples:

### Major changes

> When you make incompatible API changes.

- Any breaking change for consumers of the package.
- Adding/changing an eslint rule with error level (will break the build), that can not be auto-fixed.
- Deprecation of a node version.

### Minor changes

> When you add functionality in a backward compatible manner.

- Adding eslint rule with warning level (will not break the build).
- Adding eslint rule with any level that can be auto fixed (eg. import order).
- Removing eslint rules.

### Patch changes

> When you make backward compatible bug fixes/updates.

- Fixing bugs.
- Updating dependencies of a package.
- Impactful changes to documentation. This will likely only happen together with feature change.

### No changeset needed

- Any change to non-package files (the main repo or build system).
- Update to documentation other than the main README's of packages.

## Versioning & publishing

> ⚠️ Always discuss with a senior code owner.

Every time a PR gets merged to `main`, a github action will trigger. If the action discovers changeset files (in the `.changeset` folder), it will create a PR called "Ready for release". This PR will be updated when more merges occur.

At some point a code owner will decide that it is time for a release and merge the "Ready for release" PR. This will publish the affected packages to npm with the relevant new version. For instance, two patches and one minor release will increment the version of the package on npm with 0.1.0.

### Manual versioning & publishing

Versioning is done with `npx changeset version`. This will update some files. Make sure to merge this to `main` before you publish.

Doing a manual release using the changesets cli requires an [npm token](https://docs.npmjs.com/creating-and-viewing-access-tokens) with access to the IGNE organization on npm.

Add this token to your shell config (.bashrc/.zshrc): `export NPM_TOKEN_SCOPE_IGNE=npm_XXXXXXX`. This way the `npx changeset publish` command will be able to publish the package to npm.

Alternatively you can publish using `npm publish` using a granular access token. But this is not recommended.

## Inner workings

Some explanation on how this repo works. This may be helpful knowledge for other projects as well.

### NPM token chain

To publish a package with changesets, you need to authenticate with npm by an automation token. It is referenced in `.npmrc` and provided in the following ways:

```
.npmrc (public)          version-release action (public)                      Github secrets (private)
NPM_TOKEN_SCOPE_IGNE  ←  NPM_TOKEN_SCOPE_IGNE=secrets.IGNE_NPM_AUTOMATION  ←  IGNE_NPM_AUTOMATION=npm_XXXX

                      ↖  local shell config (private)
                         NPM_TOKEN_SCOPE_IGNE=npm_XXXX
```

### Github action permissions

The dependabot action requires workflow read and write permissions. And "Allow GitHub Actions to create and approve pull requests needs to be checked.  
You can set these in the Repo settings → Code and automation → Actions → General → Workflow permissions. However, it needs to be enabled on organization level and only users with the organization "owner" role can do that.
