# commontext-api

CommonText API


## Document graphQL API building journey

choice of technology -> js/ts/express

- pnpm as package manager, with workspaces
  - multiple individual projects consumption without publishing them locally
  - run commands for all monorepo apps and packages at the comfort of the root of the application using `filter`
  - consume a library from application in monorepo
  - with scripts you are pushing implementation details to npm

add dependencies locally with in mono repo packages - `pnpm add --filter shared-ui typescript -D`


## express vs nest.js

- nest.js uses esxpress (by default) underneath it which could be changes by fastify when needed for performance gains
- nest.js provides ready to use application architecture structure/abstractions using providers, controllers, modules and services

## DI

- How TS emits data and how can we leverage it to build DI mechanism
  - `@injectable()` decorator adds TS metadata to the class for framework DI mechanism
  - metata is generated by TS compiler
  - TS provide metada reflection API to do metaprogramming
  - challenges
    - dealing with circular depenndency
    - interfaces -> objects
    - what we know about dependency as a framework so that we can properly inject it ?
  - forward reference
- best of angular for server-backends using nodejs
- class askes for depencies from external sources rather than creating them locallu like

```js
class someService {
  constructor(
    private httpService = new httpService
    private logger = new LoggerService
  ){}
}
```

## Stream oriented architecture

- fancy name over CQRS pattern
  - domain commands, domain queries, domain events happen overtime
  - data comes with unpredictable intervals
  - Advantages / disadvantages
    - complexity, redability, maintainability
  - Reactive programming
- move from Layered Architecture / Service-oriented-architecture to stream-oriented-architecture
- in CQRS we dont have Services anymore they are replaces with commands and queries