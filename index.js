require('node-jsx').install({extension: '.jsx'})
var path = require('path')

//module.exports = {}


module.exports = {
  clientListen : {},
  init : function(){

  },
  entries : {
    path : path.join(__dirname, 'entries'),
    container : require('./Page.jsx'),
    spec : {
      home : {
        serverEvents :  [
          require('./entries/home/events/notification')
        ],
        types : [
          require('./common/types/todo.js'),
          require('./common/types/user.js')
        ]
      }
    }
  },
  assets : [{
    path :  path.join(__dirname, 'public'),
  }]
}
