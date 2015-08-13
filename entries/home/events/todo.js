'use strict';

module.exports = function (source, types) {
  return {
    'todo.create': function createTodo(todo) {
      return todo.push().then(function () {
        console.log('todo, created')
      })

    }
  }
};


