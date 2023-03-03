//使用es6模块化的语法导入jquery
import $ from "jquery"
import './css/index.css'
import './less/index.less'

//实现隔行变色的效果
$(function () {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', 'blue')
})

class Person{
  static info='person info'
}

console.log(Person.info)