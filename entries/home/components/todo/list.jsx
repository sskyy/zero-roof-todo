
var Roof = require('roof-zeroql')
var Item = require('./item.jsx')
var Input = require('./input.jsx')

module.exports = Roof.createContainer({
  displayName:'Todo-list',
  name : 'TodoList',
  rootQueries : {
    todos : `
      Todo {
        ${Item.getQuery('todo')}
      }
    `
  },
  render : function(){

    //console.log('rendering', this.data.todos)
    var todoNodes =this.data.todos.map(function(todo,i){
      return <Item key={i} todo={todo}></Item>
    })

    return <div>
      <Input />
      <div>
        {todoNodes}
      </div>
    </div>

  }
})