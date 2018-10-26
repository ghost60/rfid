/** APP入口 **/
import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
// import Root from "./container/root";
import Show from "./container/show";

/** 公共样式 **/
import "./styles/css.css";
import "./styles/less.less";

ReactDOM.render(<Show />, document.getElementById("app-root"));

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
