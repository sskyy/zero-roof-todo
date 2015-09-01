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
    if( !this.state.detail  ){
      //这样就指更新自己
      this.props.user.pull( `{
          id,
          name,
          age,
          gender,
          created Todo{
            id,
            content
          }
        }
      `).then(function(){
        that.setState({detail:true})
      })
    }else{
      that.setState({'detail': false})
    }
  },
  render : function(){

    //var updated = this.props.user.get('updated') ? <div>(updated)</div> : null
    //if( this.props.user.get('gender')  ) debugger
    var buttonStr = this.state.detail ? 'less' : 'more'

    //var createdBrief = this.state.detail ? (<div className='user-item'>
    //    created : {this.props.user.get('created').map(function(todo){ return todo.get('id')}).join(',')}
    //  </div>) : null
    console.log( this.props.user.get('created') && this.props.user.get('created').map(function(todo){ return todo.get('id')}).join(',') )
    var createdBrief = this.props.user.get('created') ? this.props.user.get('created').map(function(todo){ return todo.get('id')}).join(',')  :null

    //TODO 重新搜索后，整个 todo 节点都重新渲染了。所以 created 的信息没有了
    //但是为什么 state 仍然是 正常的 ?

    console.log("rendering!!!!!!!!!!", this.props.user.get('name') ,createdBrief)

    var card = this.state.detail  ?
    <div>
      <div className='user-item user-name'>{this.props.user.get('name')}</div>
      <div className='user-item'>id:{this.props.user.get('id')}</div>
      <div className='user-item'>gender:{this.props.user.get('gender')}</div>
      <div className='user-item'>age:{this.props.user.get('age')}</div>
      {createdBrief}
    </div> :
      <div>
        <div className='user-item user-name'>{this.props.user.get('name')}</div>
      </div>

    return <div className='user'>
      {card}
      <div className='user-item'>
        <a href='javascript:void(0)' onClick={this.toggleDetail}>{buttonStr}</a>
      </div>
    </div>
  }
})