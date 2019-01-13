import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Axios from "axios";
import { Provider } from "react-redux";
import { store, persistor } from "./persistStrore";
import { PersistGate } from "redux-persist/integration/react";

Axios.defaults.baseURL = "http://localhost:4444";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
