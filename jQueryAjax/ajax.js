$(function() {

  /*SEARCH EVENTS*/

  $('#search-button').click(function() {
    if ($('#input').val().length !== 0) {
      searchShow();
      $('#searchTitle').remove();
      $('#searchResults').
          before(
              '<div class="p-5" id="searchTitle"><h1 class="text-center">Search Results for ' +
              $('#input').val() + '</h1></div>');
      $('#searchResults').css('display', 'block');
      $('#search-button').attr('href', '#searchTitle');
    }
  });

  $('#input').keyup(function(e) {
    if (e.keyCode === 13) {
      $('#search-button').click();
    }
  });

  /*SCROLL ANIMATIONS*/

  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $('#topButton').css('display', 'flex').fadeIn();
    } else {
      $('#topButton').fadeOut();
    }
  });

  $('a').click(function(e) {
    if (this.hash !== '') {
      e.preventDefault();

      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });

});

/*SEARCHING TV SHOW DATA FROM API AND CREATING CARDS*/

function searchShow() {

  let input = $('#input').val();
  $.getJSON('http://api.tvmaze.com/search/shows?q=' + input, function(data) {

    $('#showCards').empty();


    $.each(data, function(index, value) {
      console.log(index, value);

      let link;
      let image;
      let summary;

      if (value.show.officialSite) {
        link = value.show.officialSite;
      } else
        link = value.show.url;

      if (value.show.image) {
        image = value.show.image['medium'];
      } else {
        image = '';
      }

      if (value.show.summary) {
        summary = value.show.summary;
      } else
        summary = '';

      const item = `<article class="card">
                            <img class="card-img-top" src =  ${image}>
                            <div class="card-body">
                                <h2 class="card-title">${value.show.name}</h2>
                                <h5>${value.show.genres.join('&nbsp;')}</h5>
                                <a class=card-text href = ${link} target = "_blank">Official site</a>
                                <p>${summary}</p>
                            </div>
                        </article> `;
      $('#showCards').append($(item));
    });
  });
}


