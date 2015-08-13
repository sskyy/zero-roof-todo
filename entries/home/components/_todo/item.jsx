var React = require("react")
require("./item.less")
var bus = require("../../events")

var Index = React.createClass({
  removeTodo( todo ){
    bus.fire("todo.remove", todo)
  },
  completeTodo( todo ){
    bus.fire("todo.complete", todo)
  },
  render() {
    var creatorNode = null;
    var executorNode = null;
    var todo = this.props.todo

    if( todo.get("creator") ){
      creatorNode = (<span className="todo-item-creator-name">by {todo.get("creator.name")}</span>)
    }

    if( todo.get("executor") ){
      executorNode = (<span className="todo-item-executor-name">to {todo.get("executor.name")}</span>)
    }


    var completeClass = "todo-item-content-prefix " +  (todo.get("completed") ? "completed" : "")

    return (
      <div className="todo-item">
        <span className={completeClass} onClick={this.completeTodo.bind(this, todo)}>
        </span>
        <span className="todo-item-content" >
        {todo.get("content")}
        </span>
        {creatorNode}
        {executorNode}
        <a href="javascript:void(0);" className="todo-item-delete" onClick={this.removeTodo.bind(this, todo)}>
          delete
        </a>
      </div>
    )
  }
})

module.exports = Index
