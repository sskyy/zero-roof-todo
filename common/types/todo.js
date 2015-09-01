

module.exports = {
  type : 'Todo',
  primary: '_id',
  relations: [{
    name: 'assigned',
    unique: {
      to : true
    },
    to : 'User'
  },
    {
      name: 'created',
      unique: {
        to : true
      },
      reverse: true,
      to : 'User'
    },{
      name : 'mentioned',
      to : 'User'
    }]
}
