直接在项目里使用css会报错(在index.js里直接import进一个css文件回报如下的错误)

![图片](./imgs/直接引入css文件报错（没有使用css加载器）.png)

------------------------------

![图片](./imgs/没有引入css加载器报错.png)


处理过程，引入css加载器过程：
1. 运行 **npm i style-loader css-loader -D** 命令，安装处理css文件的loader

2. 在webpack.config.js的module -> rules数组中，添加loader规则如下（加载器对应的是规则）
```
// 所有第三方文件模块的匹配规则
 rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ],
//其中test表示匹配的文件类型(此处表示以css结尾的文件类型)，use表示对应要调用的loader

// 一切以官方标准为准，看官方的加载器使用方式
```