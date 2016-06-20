var Backbone = require('backbone');

var LikeButton = Backbone.Model.extend({
  defaults: {
    'count': 0
  },

  initialize: function(){
    console.log('am i working?');
  },

  incrementer: function(){
    var countUp = this.get('count') + 1;
    this.set('count', countUp);
    if(countUp == 1){
      return countUp + ' Like';
    } else {
    return countUp + ' Likes';
    }
  }

});


module.exports = {
  'LikeButton': LikeButton
};
