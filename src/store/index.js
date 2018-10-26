/** 全局唯一数据中心 **/
import { createStore } from "retalk";

import ModelApp from "../models/app";
import ModelTest from "../models/test";
import ModelFfid from "../models/rfid";

const store = createStore({
  app: ModelApp,
  test: ModelTest,
  rfid: ModelFfid
});

export default store;
