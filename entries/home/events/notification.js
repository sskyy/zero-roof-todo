module.exports = function ( source, types) {

  return {
    'todo.create': {
      fn: function *createNotification(todo) {
        if (todo.relations) {

          var mentioned = todo.get('mentioned')
          if (mentioned) {
            yield mentioned.map(function (user) {
              var Mail = types.Mail
              var mail = new Mail({content: `${user.get('name')} mentioned in: ${todo.get('content')}`})

              return mail.push()
            })
          }
        }
      },
      last: true
    }
  }


}