### Hi there 👋

## Folder structure
```
├── e2e - End-to-end Playwright tests
├── frontend - React application
├── server - Server with scraper
```

## Server
Unfortunately, both provided trending APIs aren't working
- https://gh-trending-api.herokuapp.com is down.
- https://www.npmjs.com/package/github-trends-api
-- Restricted by CORS
-- Has outdated scrapers which breaks while parsing repositories
So, I had to patch the scraper(copy/paste, no time for PR 😋) and wrap it in a simple express app.

## Notes
- Listing of trending repositories and developers is implemented
- App is not responsive (in order to save time and since no css frameworks are used)
- Ui-kit is minimal but extensible and there are no accessibility attributes (ARIA, etc)

# Running the app

## Running the application

In order to run the application, you need to run both server and UI, this can be done by using `start` script from the root directory.
```
yarn
yarn start
```

## Running e2e tests

You can use `e2e` script from the root directory to start e2e tests. Note that you need to have the application to be started.
```
yarn start
yarn e2e
```


## Running storybook

To start storybook use `storybook` script. After building it will be accessible at http://localhost:6099/.
```
yarn storybook
```

## Running frontend in dev mode

`frontend` is a regular create-react-app application, so you can cd in the folder and use regular CRA commands
```
cd frontend
yarn start
```