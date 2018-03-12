//This is then entry point for your app. Do as you wish.

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ConfigureStore from "./configureStore";
import "./scss/index.scss";
import App from "./containers";

ReactDOM.render(
  <Provider store={ConfigureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
