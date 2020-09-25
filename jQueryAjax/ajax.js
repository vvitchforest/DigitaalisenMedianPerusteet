$(function() {
  $('#search-button').click(function() {

    let input = $('#input').val();

    $.getJSON('http://api.tvmaze.com/search/shows?q=' + input, function(data) {
      $('section').empty();

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

        const item = `<article>
                        <h2>${value.show.name}</h2>
                        <h5>${value.show.genres.join('&nbsp;')}</h5>
                        <a href = ${link} target = "_blank">Official site</a><br><br>
                        <img src =  ${image}>
                        <p>${summary}</p>

</article> `;

        $('section').append($(item));

      });
    });
  });
});