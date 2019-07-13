import React from "react";
import ReactDOM from "react-dom";
import thunk from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers
const rootElement = document.getElementById("root");
const store = createStore(
  rootReducer, applyMiddleware(thunk)
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  + rootElement
);
