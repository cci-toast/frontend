import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import * as serviceWorker from "./service-worker";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
