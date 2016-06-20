var models = require('./models/like');
var $ = require('jquery');


var numberOfLikes = new models.LikeButton();

$('.like-button').on('click', function(event){
  event.preventDefault();
  var count = numberOfLikes.incrementer();
  console.log(count);
  $('.like-button').text(count);
});
