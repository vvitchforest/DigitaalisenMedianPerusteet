$(function() {
  $('#search-button').click(function() {

    if ($('#input').val().length !== 0) {
      searchShow();
      $('#searchResults').
          before('<div class="p-5" id="searchTitle"><h1 class="text-center">Search Results for ' +
              $('#input').val() + '</h1></div>');
      $('#searchResults').css('padding', '20px 0 0 20px');
      $('#searchResults').css('min-height', '100vh');
      $('#searchResults').css('width', '100vw');
      $('#search-button').attr('href', '#searchTitle');
    }
  });
});

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

      const item = `
                        <div class="card">
                            <img class="card-img-top" src =  ${image}>
                            <div class="card-body">
                                <h2 class="card-title">${value.show.name}</h2>
                                <h5>${value.show.genres.join('&nbsp;')}</h5>
                                <a class=card-text href = ${link} target = "_blank">Official site</a>
                                <a href="#" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#shroom-1">Open
                                image</a>
                                <p>${summary}</p>
                            </div>
                        </div>

 `;

      $('#showCards').append($(item));

    });
  });

}
