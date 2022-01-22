const path = require('path');
module.exports = {
  // 编译模式，mode用来指定构建模式
  mode: 'development', // development production 
  entry: path.join(__dirname,'./src/index.js'), //入口
  output: {  //出口，输出
    path: path.join(__dirname,'./dist'),
    filename: 'bundle.js' //输出文件名称
  },
  devServer: {
    static: "./src"
  }
}