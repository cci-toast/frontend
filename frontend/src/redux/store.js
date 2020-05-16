import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootEffect from "./effects";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [
    "loginReducer",
    "profileReducer",
    "financesReducer",
    "familyReducer",
    "goalsReducer",
    "advisorReducer",
    "planReducer",
    "actionItemsReducer",
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

export default { store, persistor };

sagaMiddleware.run(rootEffect);
