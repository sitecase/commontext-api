# commontext-api

CommonText API


## Document graphQL API building journey

choice of technology -> js/ts/express

- pnpm as package manager, with workspaces
  - multiple individual projects consumption without publishing them locally
  - run commands for all monorepo apps and packages at the comfort of the root of the application using `filter`
  - consume a library from application in monorepo
  - with scripts you are pushing implementation details to npm

