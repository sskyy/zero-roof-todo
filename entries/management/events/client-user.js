module.exports = function( galaxies, types ){
  /*
   服务器端再触发的事件，就是纯服务器端事件了。
   */

  return {
    'user.create' : {fn:function updateUI( data ){

      galaxies.get('Users', 'users').refetch()
      galaxies.get('Logs', 'logs').refetch()
    },last:true}
  }
}