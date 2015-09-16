var Roof = require('roof-zeroql')
var User = require('../user/user.jsx')

require('./item.less')

module.exports = Roof.createContainer({
  displayName:'Todo-item',
  queries : {
    todo: `
      Todo {
        id,
        content,
        mentioned User {
          ${User.getQuery('user')}
        }
        User created{
          ${User.getQuery('user')}
        }
      }
    `},
  verbose : function(){
    this.props.todo.query.setFields(`{
        id,
        assigned User{
          ${User.getQuery('user')}
        }

        mentioned User{
          ${User.getQuery('user')}
        }
    }`).catch(function(e){
      console.error(e)
    })
  },
  mention : function(){
    var User = this.app.data.getNodeClass('User')
    var fill = new User({id:"2"})

    this.props.todo.relate( fill, 'mentioned')
  },
  destroy : function(){
    this.bus.fire('todo.destroy', this.props.todo )
  },
  render : function(){
    //var b =         <div className='todo-content'>{this.props.todo.is('pushing')}</div>


    //console.log( "rendering", this.props.todo.get('created'))


    console.log( "mentioned", this.props.todo.get('mentioned'))

    var mentionedUsers = this.props.todo.get('mentioned') ?
      <div className='todo-user'>
        <div>mentioned</div>
        {this.props.todo.get('mentioned').map(function( mentioned){
          return <User user={mentioned}></User>
        })}
      </div>
      :null

    var createdUser = this.props.todo.get('created')
      ?(<div className='todo-user'>
        <div>created by</div>
        <User user={this.props.todo.get('created')}></User>
      </div>): null

     var assignedUser = this.props.todo.get('assigned')
       ? (<div className='todo-user'>
        <div>assigned to</div>
        <User user={this.props.todo.get('assigned')}></User>
      </div>) : null


    return <div className="todo-item">
      <div className='todo-column todo-column-content'>
        <div className='todo-content'>{this.props.todo.get('content')}</div>
      </div>
      <div className='todo-column'>
        <a className='todo-action' href='javascript:void(0)' onClick={this.mention}>mention fill</a>
        <a className='todo-action'href='javascript:void(0)' onClick={this.verbose}>verbose</a>
        <a className='todo-action'href='javascript:void(0)' onClick={this.destroy}>destroy</a>
        {createdUser}
        {assignedUser}
        {mentionedUsers}
      </div>
    </div>
  }
})