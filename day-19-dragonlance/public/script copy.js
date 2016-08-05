
var $charList = $('.characters');

var promise = $.ajax({
  url: 'http://localhost:5003/api/dragonlance'
});

console.log('after ajax call made');

promise.done(function(data) {
  console.log('search data', data);

  for (var i = 0; i < data.characters.length; i++) {
    console.log(data.characters[i].name);
      /*
      $charList.append('<li>' + data.characters[i].name + '</li>');
      $charList.append('<li>' + data.characters[i].description + '</li>');
      $charList.append('<li>' + data.characters[i].race + '</li>');
      */

    $charList.append('<li>' + data.characters[i].name + data.characters[i].description + data.characters[i].race + '</li>');
  }
});



/*
$('#do-user-search').on('click', searchNow);
*/
