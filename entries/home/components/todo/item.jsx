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
        User created {
          ${User.getQuery('user')}
        }
        assigned User{
          ${User.getQuery('user')}
        }
        mentioned User{
          ${User.getQuery('user')}
        }
      }
    `},
  render : function(){
    //console.log( "rendering", this.props.todo.get('created'))
    return <div className="todo-item">
      <div className='todo-column todo-column-content'>
        <div className='todo-content'>{this.props.todo.get('content')}</div>
        <div className='todo-content'>{this.props.todo.is('pushing')}</div>
      </div>

      <div className='todo-column'>

        <div className='todo-user'>
          <div>created by</div>
          <User user={this.props.todo.get('created')}></User>
        </div>

        <div className='todo-user'>
          <div>assigned to</div>
          <User user={this.props.todo.get('assigned')}></User>
        </div>

        <div className='todo-user'>
          <div>mentioned</div>
          {this.props.todo.get('mentioned').map(function( mentioned){
            return <User user={mentioned}></User>
          })}

        </div>

      </div>


    </div>
  }
})