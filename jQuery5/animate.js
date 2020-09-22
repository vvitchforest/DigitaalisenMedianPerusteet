'use strict';

/*-----------------------Sooth scrolling ---------------------------*/

$(function() {
  $('a').click(function(e) {
    if (this.hash !== '') {
      e.preventDefault();

      let hash = this.hash;

      $('html, body').animate({
        scrollLeft: $(hash).offset().left,
      }, 900, function() {
        window.location.hash = hash;
      });
    }
  });

  $('body').mousemove(function(e) {
    if (e.pageY < 100) {
      $('nav').slideDown('slow');
    } else
      $('nav').slideUp('slow');
  });

});

