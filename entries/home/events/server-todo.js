'use strict';

module.exports = function (galaxies) {
  return {
    'todo.create': function *createTodo(rawTodo, mentionedIds) {
      //return
      var User = galaxies.getNodeClass('User')
      var Users = galaxies.getNodesClass('User')
      var Todo = galaxies.getNodeClass('Todo')

      if( !this.req.session.user || !this.req.session.user.id ) {
        console.log( this.req.session )
        return this.error(403,{msg:'you are not logged in'})
      }

      var creator = yield User.from({id : this.req.session.user.id})
      var mentionedUsers = yield Users.from({id : mentionedIds})

      if( !creator )  return this.error(406,{msg:'cannot find current user'})

      console.log( 'creator',creator.toObject() )

      var todo = new Todo(rawTodo)
      todo.relate( creator, 'created', true)
      mentionedUsers.forEach(function( user){
        todo.relate( user, 'mentioned')
      })

      return todo.push()
    }
  }
};

