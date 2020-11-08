import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSagas";
import storage from "redux-persist-indexeddb-storage";

const configureStore = () => {
  const persistConfig = {
    key: "root",
    storage: storage("miNigh"),
    blacklist: ["appState"],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
