var React = require("react")

var List = require("./list")
var Input= require("./input")

var data = require("../../data")

var Index = React.createClass({
  mixins : [data.mixin],
  cursors : {
    todos : ['todos']
  },
  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    )
  }
})

module.exports = Index
