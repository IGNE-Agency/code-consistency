---
"@igne-agency/eslint-config-igne": major
---

Implements eslint flat config with eslint 9.

**BREAKING CHANGES**

- Now using eslint flat config. See the [docs](./README.md) to learn how to update your existing config.
- **Eslint version >=9** is now required as peerdependency (was 8).
- **Typescript version >=4.7.4** is now required for typescript projects (was 4.0.0).
- The package is now in ESM format. There are no IGNE dependents using CJS AFAIK, but if I missed one [let me know](https://github.com/IGNE-Agency/code-consistency/issues).
- The default eslint config should now be imported like: `import { eslintConfigDefault } from '@igne-agency/eslint-config-igne'`
- The expo eslint config should now be imported like: `import { eslintConfigExpo } from '@igne-agency/eslint-config-igne'`

**Additional notes**

- `tsconfig.json` or `tsconfig.*.json` files should be present in the project root. Amongst other things, these are used for paths (aliases) by the import plugin. Other names/locations are currently not supported, but you can update your local `eslint.config.js`.  
  None of the IGNE projects currently use any other tsconfig name or location, so this should not be an issue. Otherwise [let me know](https://github.com/IGNE-Agency/code-consistency/issues).
- The expo plugin is not updated yet for flat config, so the two [expo rules](https://github.com/expo/expo/tree/main/packages/eslint-plugin-expo/docs/rules) no longer work.  
  These are quite minor and should give runtime warnings in development anyway.
- CJS files now have the global `node`, so no more error for `module` doesn't exist.
