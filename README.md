# Application Stub using Meteor + React + TypeScript

A bare-bones application source that includes a set of basic technologies (libraries and tools)
which I find very useful when starting a new Meteor/React project on TypeScript.

## Disclaimers

- It's expected that you already are familiar with at least MeteorJS and React. Assuming that,
  the rest of the included technologies can be learned on-the-fly.
- I'm not an expert in any of these technologies, so I will welcome any useful contribution to
  this code.

## Simplicity first

It is very important to keep this code so simple and clean that it will _not require additional
documentation_ aside from this file and the code commens. Just follow these steps:

- clone the repo;
- run the code locally (yarn start);
- start editing the files.

## Technology stack

- `yarn`: used instead of `npm` everywhere;
- `typescript` (3): all code is TypeScript;
- `meteor` (1.9): Meteor JS framework;
- `react` (16): React core;
- `react-router`: client-side routing library;
- `react-i18next`: i18n package based on `i18next`;
- `meteor/fourseven:scss`: SCSS compiler library;
- `node-scss`:
- `material-ui` (core + icons + pickers): material design system;
- `dayjs`: date/time handling library;
- `lodash`: JS/TS utility library;

### To be added:

- Back-end tools:
  - `mongodb-queue`: Job queue service based on MongoDB;
  - `meteor/littledata:synced-cron`: Distributed CRON service based on MongoDB.
- API tools:
  - `express`: APi middleware framework;
  - `express-rate-limiter`: Rate limiter for ExpressJS;
  - `express-slow-down`: Augment ExpressJS rate limiter with slow-down behavior;
  - `helmet`: best practices for protecting the API;

## Run locally

```sh
yarn start # http://localhost:3000
```

## Components

### Wait.tsx

The `<Wait/>` component has the syntax described below. It will wait for the `Promise` returned
by the `for` prop function to resolve and will render the `children` only after. If the loading
process takes too long (longer than ~500 ms) a backdrop and spinner are shown.

```tsx
return <Wait for={(): Promise<T> => {}}>{children}</Wait>;
```
