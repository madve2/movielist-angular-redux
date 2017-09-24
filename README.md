# Movielist

This project was created to demonstrate usage of [The Movie Database](https://www.themoviedb.org) API in an Angular app using Redux.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Please note that you need to set your API key for The Movie Database in `environments\environment.ts`, otherwise movie data will be served by a mock service.

```
export const environment = {
  production: true,
  baseUrl: 'https://api.themoviedb.org/3',
  posterBaseUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2',
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' //<-- add your key here
}
```

The mock service isn't available in production builds – in that case, not including the API key will result in a 401 (Unauthorized) error when the API is called.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Planned additions

- Caching
- e2e tests
- A search bar with suggestions
- Deep linking support
- Making it a bit more mobile-friendly
