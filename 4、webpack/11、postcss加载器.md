postCSS加载器功能非常大(既然是加载器那肯定就是在webpack中使用的)

在这里 主要就介绍一下利用工具包自动添加css前缀的功能，为了适应各个浏览器

1. npm i postcss-loader  autoprefixer -D 

2. 在项目根目录中创建postcss.config.js,并初始化如下配置
```
const autoprefixer = require('autoprefixer') //导出自动添加前缀的插件

module.exports = {
  plugins: [autoprefixer] //挂在插件
}
```
3.在webpack配置文件中进行如下的配置,配置postcss加载器

```
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
          },
          {loader: "postcss-loader"}
        ],
      },
]
```