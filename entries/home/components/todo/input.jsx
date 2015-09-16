var Roof = require('roof-zeroql')
require("./input.less")
var message = require('antd').message


var At = require('./at.jsx')
var NameRegExp = /@[a-zA-Z0-9\u4e00-\u9fa5_-]+$/


var Index = Roof.createContainer({
  mentioned : [],
  getInitialState : function(){
    return {content : '',showAt : false}
  },
  onChange : function(e){
    console.log( NameRegExp.test( e.target.value), e.target.value)
    var showAt = NameRegExp.test( e.target.value) ? true : false
    this.setState({content : e.target.value, showAt:showAt})
  },
  onKeyUp : function(e){
    if(e.which !== 13) return

    var todo = {content:this.state.content }
    var mentioned = this.mentioned.map(function( u){
      return u.get('id')
    })

    this.bus.fire('todo.create',todo, mentioned).then(function(){
      message.success('创建成功')
    }).catch(function(){
      message.error('创建失败')
    })

  },
  atSelected : function( user ){
    this.mentioned.push( user )
    this.setState({content : `${this.state.content.replace(NameRegExp,'@'+user.get('name'))} `, showAt : false})
  },
  render() {

    var atNode = this.state.showAt ? <At
      name = {this.state.content.match(NameRegExp)[0].slice(1)}
      onSelect={this.atSelected}
      /> : null


    return (
      <div className="todo-input">
        <input
          type="text" value={this.state.content}
          onKeyUp={this.onKeyUp}
          onChange={this.onChange}
          placeholder="创建新的todo, 按回车确定"
          />
        {atNode}
      </div>
    )
  }
})

module.exports = Index
