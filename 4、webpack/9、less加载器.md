webpack中使用less加载器

1. npm i less-loader less -D命令    // less是less-loader是内置依赖项，less-loader想要正常工作，必须确保我们已经安装了less

2. 在webpack.config.js中进行配置
module -> rules数组中添加loader
```
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
    ],
  },
  ```
