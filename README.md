# News App

Assignment for Manantal

### Specifications

- Bootstrapped with nx
- React
- React router
- Redux toolkit
- Styled components
- Material ui
- ci github actions

### Set up

#### Install dependencies

`npm i`

#### Serve development environment

`npm start`

#### Simulate production environment with docker and nginx

- run docker on desktop
- build image
  `npm run build-production-image`
- run image
  `npm run start-production`

#### Run test

`npm test`

#### Notes

I wrote tests as example will take me to much time to write tests for everything can see examples of a test of state in `src/app/news/state/news.state.test.ts` a component without state `src/app/shared/components/results/results.test.tsx` and a component with state and props `src/app/news/components/sources-filter/sources-filter.test.tsx`, same with comments you can see and example on `src/app/shared/components/results/results.tsx`
Hope you like it
