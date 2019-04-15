/** APP入口 **/
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./container/show/index";
import "./styles/css.css";
// import "@babel/polyfill";
import "babel-polyfill";

ReactDOM.render(<App />, document.getElementById("app-root"));

// registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
