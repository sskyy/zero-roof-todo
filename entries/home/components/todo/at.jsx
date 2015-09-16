var Roof = require('roof-zeroql')
require("./at.less")


var Index = Roof.createContainer({
  rootQueries : {
    users : `User(name) {
      id,
      name
    }`
  },
  componentDidMount:function(){
    var name = this.props.name

    this.props.users.query.setAttr( 'name', {like : `${name}%`})
  },
  onSelect: function( user ){
    if( this.props.onSelect ){
      this.props.onSelect(user )
    }
  },
  render() {

    var root = this
    var users = this.props.users.map(function( user ){
      return (<div className='at'>
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
