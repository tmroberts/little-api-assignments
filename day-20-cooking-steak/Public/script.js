
$steaksChart = $('.steaks');


function addStuffByUsingLotsOfStringConcatenation(data) {

  for (var i = 0; i < data.levels.length; i++) {
    var html =
      '<div class="name">' + data.levels[i].name + '</div>'
      + '<div class="imageUrl">' + '<img src="' + data.levels[i].imageUrl  + '" />' + '</div>'
      + '<div class="description">' + data.levels[i].description + '</div>'
      /*  console.log('Image URL : ', data.levels[i].imageUrl); */
    + '</div>';

    $steaksChart.append(html);
  }
}

var promise = $.ajax({
  url: 'http://tiy.ericsowell.com/api/cookingsteaks'
});

console.log('after ajax call made');

promise.done(function(data) {
  console.log('search data returned ', data);

  addStuffByUsingLotsOfStringConcatenation(data);

});
