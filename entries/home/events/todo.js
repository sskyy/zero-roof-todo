'use strict';

module.exports = function (data) {
  return {
    'todo.create': {fn:function createTodo(rawTodo) {
      //var Todo = data.getNodeClass('Todo')
      //var todo = new Todo(rawTodo)
      //return todo.push().then(function () {
        data.get('TodoList','todos').refetch()
      //})
    },last:true},
    'todo.destroy' : function destroyTodo( todo ){
      todo.destroy()

      return todo.push().then(function(){
        data.get('TodoList','todos').refetch()
      })
    },
    'todo.update' : function *updateTodo(){
      return this.error(406, {msg:'forbidden'})
    }
  }
};

