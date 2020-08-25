'use strict';

$(function() {

  $('p:eq(1)').attr('id', 'sp');
  $('#fp').remove();
  $('#fdiv').css({
        backgroundColor: 'grey',
        color: 'white',
      },
  );

  $('#btn').click(function() {
    $('#fdiv').append('<p id="tp">Hello user</p>');
  });

  $('#sdiv').hover(
      function() {

        $('#4p').text('About to select a link');
      },

      function() {

        $('#4p').html('&nbsp;');

      },
  );

});












