# Branches

Branches are a critical feature to not only Git but to software development in general. They allow you to work on different features, bug fixes, or experiments without affecting the main codebase. This page will describe the various branches and tags that are used in the project. To learn more about the naming conventions for branches, please refer to the [Naming Convention](./naming-convention.md) document.

## Main Branches

The main branches are branches that will always exist in the repository. They don't fit the naming conventions for the project as they are special branches that serve a specific purpose.

### Main Branch

The `main` branch is the default branch in the repository. It is the branch that is used for production-ready code. This branch should always contain the latest stable release of the project. Any changes that are made to this branch via pull requests should be thoroughly reviewed and tested. The `main` branch should always be in a deployable state. Upon a push to the `main` branch, the project will automatically perform any package updates and deployments.

### Development Branch

The `dev` branch is the development branch in the repository. It is the branch that is used for integrating new features and bug fixes. This branch should always contain the latest merged changes from development branches. The `dev` branch is used to make sure all new changes work together and don't break the project.

### Canary Branch

The `canary` branch is a special branch that is used for incremental deployments. They build artifiacts and are tagged because they are used for beta testing. It takes the changes from the `dev` branch periodically and builds the project. It will take tag any new versions of a package with a `canary` tag.
