var Roof = require('roof-zeroql')
require('./user.less')

module.exports = Roof.createContainer({
  displayName : 'User',
  queries : {
    user: `
      User {
        id,
        name
      }
      `
  },
  getInitialState : function(){
    return {
      detail : false
    }
  },
  toggleDetail : function(){
    var that = this
    if( this.state.detail === false ){
      this.queries.user.setFields( `{
          id,
          name,
          age,
          gender
        }
      `).then(function(){
        that.setState({'detail': true})
      })
    }else{
      that.setState({'detail': false})
    }
  },
  render : function(){

    var updated = this.props.user.get('updated') ? <div>(updated)</div> : null

    var buttonStr = this.state.detail ? 'less' : 'more'
    var card = this.state.detail ?
    <div>
      <div className='user-item user-name'>{this.props.user.get('name')}</div>
      <div className='user-item'>id:{this.props.user.get('id')}</div>
      <div className='user-item'>gender:{this.props.user.get('gender')}</div>
      <div className='user-item'>age:{this.props.user.get('age')}</div>
    </div> :
      <div>
        <div className='user-item user-name'>{this.props.user.get('name')}</div>
      </div>

    return <div className='user'>
      {updated}
      {card}
      <div className='user-item'>
        <a href='javascript:void(0)' onClick={this.toggleDetail}>{buttonStr}</a>
      </div>
    </div>
  }
})