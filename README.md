# Check Air Quality Between Different Cities

This project uses [OpenAQ](https://docs.openaq.org/) API to display air quality between two cities. The code was primarily written with Create React App.

## Available Scripts

In the project directory, you can run:

### `yarn start/npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test/npm run test`

Launches the test runner in the interactive watch mode.\

## Ways to improve the project

Some developer notes on how to improve the project if more time was allocated

### Modularize code

Certain aspects could have been improved by creating custom hooks such as useFetch hook. Allowing for better reuse of fetch queries with response, loading and error callbacks.

Converting the CSS to modules by changing the configuration in webpack.config would allow for more felxibility. Another option would have been to use Styled Components library

### More and better tests

The tests could be improved upon by testing validations and the API. Integration, regression and smoke tests with selenium or cypress should be added as well.

### More helper functions

Noticed there was a lot of repeated code. Creating more helper functions would reduce the clutter.

### More responsive design

The responsive design needs more work on top what is written.
