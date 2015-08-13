module.exports = function (data, types) {

  return {
    'todo.create': {
      fn: function secure(todo) {
        if (/drug/.test(todo.get("content"))) {
          return this.error(406, "有敏感词drug")
        }
      }
      //before : 'todo.createTodo' // 指定触发顺序
    }
  }


}