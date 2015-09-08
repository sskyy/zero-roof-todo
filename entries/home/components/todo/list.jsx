
var Roof = require('roof-zeroql')
var Item = require('./item.jsx')
var Input = require('./input.jsx')

module.exports = Roof.createContainer({
  displayName:'Todo-list',
  name : 'TodoList',
  rootQueries : {
    todos : `
      Todo(_limit:2) {
        ${Item.getQuery('todo')}
      }
    `
  },
  search : function(e){
    var id
    if( e.keyCode === 13 ){
        id = this.refs.search.getDOMNode().value
        this.timestamp = Date.now()
        this.props.todos.query.setAttrs(`Todo(id:'${id}')`)
    }
  },
  render : function(){

    var searchNode = <div>
    <input type='text' ref='search' placeholder='search by id...' onKeyUp={this.search}/>
    </div>

    //debugger
    //console.info('rendering', this.data.todos)
    var todoNodes =this.props.todos.map(function(todo){
      console.log("key", todo.get("id"))
      return <Item key={todo.get('id')} todo={todo}></Item>
    })

    console.log( JSON.stringify(this.props.todos.toArray()), todoNodes, this.timestamp )

    return <div>
      <div>
        <div>
          </div>
        <Input />
        {searchNode}
        {todoNodes}
      </div>
    </div>

  }
})