/** 用于开发环境的服务启动 **/
const path = require("path"); // 获取绝对路径有用
const express = require("express"); // express服务器端框架
const bodyParser = require("body-parser");
const env = process.env.NODE_ENV; // 模式（dev开发环境，production生产环境）
const webpack = require("webpack"); // webpack核心
const webpackDevMiddleware = require("webpack-dev-middleware"); // webpack服务器
const webpackHotMiddleware = require("webpack-hot-middleware"); // HMR热更新中间件
const webpackConfig = require("./webpack.dev.config.js"); // webpack开发环境的配置文件
// const proxyMiddleWare = require('http-proxy-middleware');

const app = express(); // 实例化express服务
const PORT = 8888; // 服务启动端口号

// var proxyPath = "http://192.168.0.162:8888"; //目标后端服务地址
// var proxyOption = {
//   target: proxyPath,
//   changeOrigoin: true,
//   ws: true,
//   pathRewrite: {
//     '^/api': '/'
//   }
// };
// app.use("/api", proxyMiddleWare(proxyOption));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

if (env === "production") {
  // 如果是生产环境，则运行build文件夹中的代码
  app.use(express.static("build"));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
} else {
  const compiler = webpack(webpackConfig); // 实例化webpack
  app.use(express.static("dll"));
  app.use(
    webpackDevMiddleware(compiler, {
      // 挂载webpack小型服务器
      publicPath: webpackConfig.output.publicPath, // 对应webpack配置中的publicPath
      quiet: true, // 是否不输出启动时的相关信息
      stats: {
        colors: true, // 不同信息不同颜色
        timings: true // 输出各步骤消耗的时间
      }
    })
  );
  // 挂载HMR热更新中间件
  app.use(webpackHotMiddleware(compiler));
}

app.listen(PORT, () => console.log('app listening on port 8888!'));