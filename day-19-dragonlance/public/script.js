var $charName = $('.name');
var $charRace = $('.race');
var $charDesc = $('.description');

var promise = $.ajax({
  url: 'http://localhost:5003/api/dragonlance'
});

console.log('after ajax call made');

promise.done(function(data) {
  console.log('search data', data);

  for (var i = 0; i < data.characters.length; i++) {
    console.log(data.characters[i].name);

    $charName.append('<div>' + data.characters[i].name + '</div>');
    $charRace.append('<div>' + data.characters[i].race + '</div>');
    $charDesc.append('<div>' + data.characters[i].description + '</div>');

  }

});
