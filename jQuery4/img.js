'use strict';

$(function() {

  $('button').click(function() {
    $('#advice').text('select your favourite colour among the colours');

    $('#img1').attr({
          src: 'red.jpg',
          id: 'red',
        },
    );

    $('#img2').attr({
          src: 'blue.jpg',
          id: 'blue',
        },
    );

    $('#img3').attr({
          src: 'yellow.jpg',
          id: 'yellow',
        },
    );

    $('#sel').text('your favourite colours in order');

    $('img').click(function() {
          $(this).hide();
          $('ul').append('<li>' + this.id +'</li>');
        },
    );
  });
});


