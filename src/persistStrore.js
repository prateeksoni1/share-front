import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["form"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
