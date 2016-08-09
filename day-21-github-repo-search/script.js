'use strict';

if (window.JSApp === undefined) window.JSApp = {};

(function(jsApp) {

  var $userInput = $('#user-input');
  var $userList = $('#the-list');

  function createList(data) {
    console.log(data);
    for (var i = 0; i < data.items.length; i++) {
      var html = '<li>'+data.items[i].full_name+'</li>';
      $userList.append(html);
    }
  }

  function getData(evt) {
    $userList.empty();
    if(evt.keyCode === 13) {
      var promise = $.ajax({
        url: 'https://api.github.com/search/repositories?q=' + $userInput.val()
      });
      promise.done(function(data) {
      createList(data);
      });
    }

  }

  function start() {
    $userInput.on('keyup', getData);
    input.focus();
  }

  jsApp.start = start;

})(window.JSApp);
