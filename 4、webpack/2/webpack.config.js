const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
});
module.exports = {
  // 编译模式，mode用来指定构建模式
  mode: "development", // development production
  entry: path.join(__dirname, "./src/index.js"), //入口
  output: {
    //出口，输出
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js", //输出文件名称
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          }
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [ { loader: "style-loader" },
        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },
        {
          loader: "sass-loader", // compiles Less to CSS
        },]
      }
    ],
  },
  devServer: {
    static: "./",
  },
};
