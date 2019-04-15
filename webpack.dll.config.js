const path = require("path");
const webpack = require("webpack");
const { dependencies } = require("./package.json");
module.exports = {
  mode: "development",
  entry: {
    vendor: Object.keys(dependencies)
  },
  output: {
    path: path.join(__dirname, "dll"), // 生成的dll.js路径，我是存在/build/dev中
    filename: "[name].dll.js", // 生成的文件名字
    library: "[name]_library" // 生成文件的一些映射关系，与下面DllPlugin中配置对应
  }
};
