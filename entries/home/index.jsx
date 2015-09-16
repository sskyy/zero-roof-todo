'use strict'
require("./assets/css/elusive-icons.min.css")
require('core-js/modules/es6.array.from.js')
require('core-js/es6/map.js')
require('core-js/es6/set.js')


var React = require("react")
var Roof = require('roof-zeroql')
//require('roof/addon/react/container')
//require('roof/addon/reactive')
//require('roof/addon/sync')

require('./base.less')

var Header = require("./components/header/Header.jsx")
var TodoList = require("./components/todo/list.jsx")
var Users = require('./components/user/users.jsx')
var Mails = require('./components/mails.jsx')
//var Creators= require("./components/todo/Creators")

//var a =       <Users />

//TODO 理一下 roof container 和实例之间的关系，backend 怎么针对每个实例单独生成？
module.exports = Roof.createRootContainer({
  backend : '/taurus/centurion/query',
  types : [
    require('../../common/types/todo.js'),
    require('../../common/types/user.js'),
    require('../../common/types/mail.js')
  ],
  events : [
    //require('./events/security.js'),
    require('./events/todo.js')
  ],
  //serverEvents : [
  //  require('./events/notification.js'),
    //require('./events/server-todo.js')
  //],
  render: function(){

    return <div>
      <Header />
      <TodoList />
    </div>
  }
})

//if( typeof window !== 'undefined'){
//  window.Entry = Home
//}

