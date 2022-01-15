//  浏览器端模块化规范

// 1、 AMD  Require (http://www.requirejs.com)

// 2、CMD   Sea.js (https://seajs.github.io/seajs.docs/) 　玉伯的作品


// 服务器端的模块化规范
// 1、 CommonJS
// i：模块分为 单文件模块  与  包
// ii：模块成员导出： module.exports和exports
// ii: 模块成员导入: require('模块标识符')

//  es6模块化规范诞生之前，javascript社区就已经尝试并提出了AMD，CMD,  CommonJS等模块化规范
// --------------
// 但是存在差异前二者适用于浏览器模块化规范，后者更适合对于服务器端的模块化规范
// -------
// 因此es6语法规范中，在语言层面上定义了es6模块化规范，是浏览器和服务器端通用的语法规范
// --------
//  es6模块化规范规定中定义：
// i: 每一个js文件都是一个独立的模块
// ii: 导入模块成员使用import关键字
// iii: 导出模块成员用export关键字