
import $ from 'jquery'  // es6中的模块化语法，浏览器中支持的并不友好

$(function() {
  $('li:odd').css('backgroundColor','pink')
  $('li:even').css('backgroundColor','red')
})