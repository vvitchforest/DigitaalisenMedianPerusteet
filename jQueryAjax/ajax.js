$(function() {
  $('#search-button').click(function() {
    $('li').each(function() {
      $(this).remove();
    });

    let input = $('#input').val();

    $.getJSON('http://api.tvmaze.com/search/shows?q=' + input, function(data) {

      $.each(data, function(index, value) {
        console.log(index, value);
        let $li = $('<li></li>');
        let $article = $('<article></article>');

        $article.append(value.show.name);
        if (value.show.genres !== null) {
          $article.append('<br>' + value.show.genres);
        }
        if (value.show.officialSite !== null) {
          $article.append('<br><a href=' + value.show.officialSite +
              '>Linkki kotisivulle</a>');
        }
        if (value.show.image !== null) {
          $article.append(
              '<br><br><img src=' + value.show.image['medium'] + '>');
        }
        if (value.show.summary !== null) {
          $article.append('<br>' + value.show.summary);
        }

        $($li).append($article);
        $('ul').append($li);

      });
    });
  });
});