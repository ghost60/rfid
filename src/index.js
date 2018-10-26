/** APP入口 **/
import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
// import App from "./container/root";
import App from "./container/index";

/** 公共样式 **/
import "./styles/css.css";
import "./styles/less.less";

ReactDOM.render(<App />, document.getElementById("app-root"));

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
