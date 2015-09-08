

var Roof = require('roof-zeroql')

module.exports = Roof.createContainer({
  submit : function(){

  },
  render : function(){
    return (<div>
      <h1>Sign in</h1>

      <div>
        <input type='text' placeholder='name' />
      </div>

      <div>
        <input type='password' placeholder='password' />
      </div>

      <div>
        <button onClick={this.submit} >Sign up</button>
        </div>

        </div>)

        }
        })