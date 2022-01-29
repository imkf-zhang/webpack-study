import $ from 'jquery'  // es6中的模块化语法，浏览器中支持的并不友好
import "./css/index.css" // (直接引入会报错，当在webpack.config.js中配置css加载器规则后就好了)
import "./css/index.less"
import "./css/index.scss"
$(function() {
  $('li:odd').css('backgroundColor','pink')
  $('li:even').css('backgroundColor','black')
})