![Build Status](https://travis-ci.org/cci-toast/frontend.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/cci-toast/frontend/badge.svg)](https://coveralls.io/github/cci-toast/frontend)

# Toast Frontend

## Frontend Structure Summary
High Level Structure:
```
 ── frontend/
    ├── coverage/
    ├── public/
    ├── src/
        ├──components/
        ├──redux/
        ├──utils/
```

### Components
Components can be found under src/components.

In `src/components`, you will find `app.js` which is where the whole app begins. You will also find `page_template` which is the first step to building each screen. The login screen is also found here.
In `components/page_content`, you will find the content in the main card for each screen. This is broken down into configuration, plan, profile, action items, advisor contact, and clients. The ones with previous and next buttons (plan, profile, configuration) have folders with components for each of the screens for each step.

In `components/toast`, you will find the components that are highly reusable and specific to our application. This includes components such as our buttons, drop-down, checkbox, modals, loading state, and empty state.

For more information about the components, view this document here: [Frontend Components](https://docs.google.com/document/d/1iwX-e4eQ9qLVIU9R3Cr8y3BYaKgxIgg_K9jv_dA25wc/edit?usp=sharing)

### Redux
The redux used in the application can be found in `src/redux` which includes how we read and write to the backend using Redux Saga. This information can be found in `redux/effects`. There are also actions, selectors, and reducers to handle the state of the application.  

### Utilities
Our utility functions can be found in `src/utils`. Utilities are used mainly in our selectors (Redux). This includes information that is displayed in the help modal, logging in of clients and advisors, and outputting the financial plan. Each utility function has a unit test with the corresponding file name with “.test” appended to it.

Here is a link to the frontend demo: [Frontend Demo Video](https://youtu.be/nUC91Z_Uhfw)

## Prerequisites
* Ensure the following packages are installed with the following commands prior to running the server:
```
npm i react-scripts
npm i --save react-center
npm i --save react-router-dom
npm i style-it --save
npm i redux react-redux
npm i redux-saga
npm i jest
npm i babel
npm i babel-jest
npm i @babel/preset-env
npm i @babel/preset-react
npm i react-test-renderer
npm i recharts
npm i redux-persist
npm i reselect
npm i coveralls --save-dev
```

## Viewing the Application

https://drexeltoast.web.app/

## Deploying the Application

```
npm run build
firebase deploy
```

## Testing the Application

```
npm test
```

## Running the Application

```
npm start
```
