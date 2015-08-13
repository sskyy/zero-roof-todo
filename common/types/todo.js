

module.exports = {
  type : 'Todo',
  primary: 'id',
  relations: [{
      name: 'assigned',
      unique: true
    },
    {
      name: 'created',
      unique: true,
      reverse: true
  }]
}
