var Roof = require('roof-zeroql')

var User = require('./user.jsx')


module.exports = Roof.createContainer({
  dependencies : ['TodoList'],
  rootQueries : {
    users : `
      User {
        id,
        name
      }
    `
  },
  render : function(){
    var userNodes = this.data.users.map(function(user){
      return <User user={user}></User>
    })

    return <div>
      <h1>users:</h1>
      {userNodes}
    </div>
}

})
