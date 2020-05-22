# Stackline Assessment

## Setup

### Redux

Although Redux now has an official recommendation on tooling with [Redux Toolkit](https://redux-toolkit.js.org/), I did not choose to use that template as I haven't fully familiarized myself with it and prefer not to be slowed down by trying to learn it while doing this assessment.

### Code Formatting

Setup with:

- Husky and lint-staged for commit hooks
- Prettier for code formatting
- ESLint for linting
- Stylelint for linting

## Analysis

### Data

- Given data is an array of what appears to be products with sales data.
- While there is only one product, that indicates that you can potentially be receiving many of them to browse through on the dashboard.
- The mock shows a fairly standard layout:
  - Fixed header with a logo that likely links back to their homepage.
  - Left sidebar with:
    - Product Info
    - Navigation with Sales highlighted.
    - This indicates that they want routing where Overview is some sort of high level page with info from the JSON that we aren't rendering on the Sales page. It is unclear how you can see a listing of all products from this design.
  - Right sidebar with:
    - Sales Graph
      - Unclear what two values are being plotted from the sales data
    - Sales Table/Listing
      - All columns appear sortable
- It appears that the relevant fields from the provided JSON are:
  - title
  - tags
  - subtitle
  - sales
  - id
  - image
- All other data appears to be unused.

### Features

**Minimum Requirements** (based on instructions):

- [ ] Display Product
- [ ] 1 Year View Graph of Sales
- [ ] Sortable Table of Sales History
- [ ] Pull JSON from mock endpoint

**Additional Requirements**:

- [ ] Navigation
- [ ] Overview Page (likely additional product information along with summaries)
- [ ] Ability to view different years for Sales Graph

## Usage

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
