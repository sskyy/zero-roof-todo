
var Roof = require('roof')

module.exports = Roof.createContainer({
  name : 'todo.list',
  rootQueries : {
    todos : `
      Todo {
        User(id:1) created {}
        ${Tester.getQueryDetail('todo')}
      }
    `
  }
})