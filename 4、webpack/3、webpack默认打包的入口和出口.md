webpack 4.x中默认规定

打包入口文件为 src -> index.js

打包的输出文件为 dist -> main.js

想自己手动配置wenpack打包的入口和出口：

```
const path = require('path');
module.exports = {
  // 编译模式，mode用来指定构建模式
  mode: 'development', // development production 
  entry: path.join(__dirname,'./src/index.js'), //入口
  output: {  //出口，输出
    path: path.join(__dirname,'./dist'),
    filename: 'bundle.js' //输出文件名称
  }
}
```

