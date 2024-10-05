---
sidebar_position: 1
id: naming-conventions
---

# Naming Convention

This document outlines the naming conventions for any Git related items, such as branches, commits, and pull requests. These conventions are meant to provide consistency and clarity across the project.

## Name Areas

The following words / phrases are used frequently when it comes to naming a branch, commit, or pull request. These words / phrases are used to provide context and clarity to the item.

- **feature**: A new feature or enhancement. This could be a new component, package, hook, utility, or anything that adds new functionality to the project.
- **fix**: A bug fix or correction. This could be a fix for a component, package, hook, utility, or anything that corrects an issue in the project.
- **docs**: Documentation changes. This could be a new document, update to an existing document, or any other documentation related change.
- **refactor**: Code refactoring. This could be a change to improve code quality, readability, or maintainability.
- **test**: Changes related to testing. This could be a new test, update to an existing test, or any other testing related change.
- **chore**: Miscellaneous changes. This could be a change that does not fit into any other category.
- **ci**: Changes related to continuous integration. This could be a change to the CI configuration, workflow, or any other CI related change.

## Branch Naming

Branch names should be descriptive and provide context to the changes being made. For each branch (besides main, dev, and canary), the name should follow the format:

`
<issue_number>-<area>-<description>
`

- **issue_number**: The issue number that the branch is related to. This should be the issue number from the project management system (GitHub Issues)
  - This helps us keep track of what branches are related to what issues
- **area**: The area of the project that the changes are related to. This should be one of the words / phrases listed below:
  - feature
  - fix
  - docs
  - refactor
  - test
  - chore
  - ci
- **description**: A brief description of the changes being made. This should be in kebab-case (lowercase with hyphens separating words).

:::note

The `main`, `dev`, and `canary` branches are special branches that do not follow the naming convention. These branches are used for specific purposes and should not be used for regular development.

:::

A lot of the times a branch can be created by using the GitHub web interface. It will automatically create a branch with the issue number and a brief description of the issue. If you are creating a branch manually, make sure to follow the naming convention.

<details>
  <summary>Why does GitHub automatically create a branch with the issue number?</summary>

  The reason GitHub is able to create a branch with the issue number is because of the use of GitHub templates that are used to create issues (from which the branch is created). Templates are our way of creating issues in GitHub while keeping things consistent. There is an issue for each area (feature, fix, docs, and so on), so the title will be used for the branch name. This is why it is important to use the templates when creating issues.
</details>

:::danger

Depending on the name of the issue, the branch name may be too long or unreadable. In this case, it is okay to shorten the description to make the branch name more readable. Just make sure the branch name provides enough context to understand the changes being made. Make sure the issue number and area are still present in the branch name.

:::

## Commit Messages

Commit messages should be descriptive and provide context to the changes being made. For each commit, the message should follow the format:

`
<area>: <description>
`

- **area**: The area of the project that the changes are related to. This should be one of the words / phrases listed below:
  - feature
  - fix
  - docs
  - refactor
  - test
  - chore
  - ci

If it is applicable, after the area, you can add the issue number or the section of the project that the changes are related to. This can help provide more context to the changes being made.
