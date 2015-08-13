var Roof = require('roof-zeroql')
require("./input.less")


var Index = Roof.createContainer({
  rootQueries : {
    users : `User {
      id,
      name
    }`
  },
  onSelect: function( user ){
    if( this.props.onSelect ){
      this.props.onSelect(user )
    }
  },
  render() {

    var root = this
    var users = this.data.users.map(function( user ){
      return (<div>
        <a href='javascript:void(0)' onClick={root.onSelect.bind(root, user)}>
          id : {user.get('id')}, name : {user.get('name')}
        </a>
      </div>)
    })

    return (<div>
      {users}
    </div>)
  }
})

module.exports = Index
