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
          $('ul').append($('<li>' + this.id +'</li>'));
        },
    );
  });
});


/*Esimerkkiratkaisu*/
/*
$(function() {
  const valitseVari = function(evt) {
    $(this).hide();
    const vari = $(this).attr('src').split('.')[0];
    $('ul').append($('<li>' + vari + '</li>'));
  };

  $('button').click(function() {
    $('#advice').html('select your favourite colour among the colours');
    $('#img1').attr('src', 'red.jpg').click(valitseVari);
    $('#img2').attr('src', 'blue.jpg').click(valitseVari);
    $('#img3').attr('src', 'yellow.jpg').click(valitseVari);
    $('#sel').html('your favourite colours in order');
  });
});
 */


