
var React = require("react")
var Roof = require('roof')


module.exports = Roof.createContainer({
  displayName : 'Creators',
  cursors: {
    creators: "creators"
  },
  render: function () {
    var creatorNodes = this.cursors.creators.map(function (creator) {
      return <li>{creator.get('name')}</li>
    })
    return (
      <ul>
        {creatorNodes}
      </ul>
    )
  }
})
