var Roof = require('roof-zeroql')

module.exports = Roof.createContainer({
  displayName : 'Mails',
  rootQueries : {
    mails: `
      Mail {
        content
      }
      `
  },
  render : function(){

    //console.log( this.data)
    var mails = this.props.mails.map(function( mail ){
      console.log( mail ,'....')
      return <div>{mail.get('content')}</div>
    })

    return <div>
      {mails}
    </div>
  }
})