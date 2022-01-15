// node中默认支持commonjs模块化规范

// 对于es6的模块化node并不是支持的很好

// 因此需要借助babel体验es6模块化，babel是一个转换器
// 可以把高级的有兼容性的javascript代码转换为低级的没有兼容性的代码

// 过程，怎么做？
// 1、安装相关的依赖包：npm i --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
// 2、安装一个第三方插件：npm i --save @babel/polyfill
// 3、在项目根目录创建babel的配置文件： babel.config.js
const presets = [
  ["@babel/env"],{   // @babel/env其实就是@babel/preset-env这个插件
    targets: {   // 目标：转换完毕的代码至少支持这些版本的浏览器
      edg: "17",
      firefox: "60",
      chrome: "67",
      safari: "11.1"
    }
  }
];
modules.exports = {   // 把配置信息暴露出去供babel使用
  presets
}
// 4、启用脚手架执行代码：  npx babel-node index.js  会根据我们指定的相关信息，进行一个代码转换

