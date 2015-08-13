require("./index.less")

var React = require("react")
var Item = require("./item.jsx")
var Input =  require("./input.jsx")
var Roof = require('roof')

module.exports = Roof.createContainer({
  displayName : 'AsCreatorTodos',
  cursors: {
    asCreatorTodos: "asCreatorTodos"
  },
  render: function () {
    var todoNodes = this.cursors.asCreatorTodos.map(function (todo) {
      return <Item todo={todo} />
    })
    return (
      <div>
        <Input />
        <div className="todo-list">
          {todoNodes}
        </div>
      </div>
    )
  }
})
