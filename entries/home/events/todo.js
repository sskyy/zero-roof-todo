'use strict';

module.exports = function (data) {
  return {
    'todo.create': function createTodo(todo) {
      console.log( todo, data )
      return todo.push().then(function () {
        data.get('TodoList','todos').refetch()
      })
      //更新本地数据
      //source.TodoList.todos.insert( todo )
    },
    'todo.destroy' : function destroyTodo( todo ){
      todo.destroy()

      return todo.push().then(function(){
        data.get('TodoList','todos').refetch()
      })
    }
  }
};


