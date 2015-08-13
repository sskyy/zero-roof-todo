var Roof = require('roof-zeroql')
require("./input.less")

var Todo = require('../../../../common/types/todo.js')

var At = require('./at.jsx')

var Index = Roof.createContainer({
  mentioned : [],
  getInitialState : function(){
    return {content : '',showAt : false}
  },
  onChange : function(e){
    var showAt = /@$/.test( e.target.value) ? true : false
    this.setState({content : e.target.value, showAt:showAt})
  },
  onKeyUp : function(e){

    if( e.which === 13 ){
      var todo = new Todo({content:this.state.content})
      this.mentioned.forEach(function( user ){
        todo.relate(user, 'mentioned')
      })
      this.bus.fire('todo.create', todo)
    }

  },
  atSelected : function( user ){
    this.mentioned.push( user )
    this.setState({content : `${this.state.content}${user.get('name')} `, showAt : false})
  },
  render() {

    var atNode = this.state.showAt ? <At onSelect={this.atSelected}/> : null

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
