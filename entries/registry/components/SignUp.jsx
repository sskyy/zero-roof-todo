

var Roof = require('roof-zeroql')

module.exports = Roof.createContainer({
  submit : function(){
    console.log( this)
    this.bus.fire('user.signup', {name:'jason',password : '123123'}).then(function(res){
    }).catch(function(e){
      console.error( e)
    })
  },
  render : function(){
    return <div>
      <h1>Sign up</h1>

      <div>
        <input type='text' placeholder='name' />
      </div>

      <div>
        <input type='password' placeholder='password' />
      </div>

      <div>
        <button onClick={this.submit}>Sign up</button>
      </div>

    </div>

  }
})