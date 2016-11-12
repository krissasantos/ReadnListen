function getArtistArticlesAdapter(artistData){
  event.preventDefault()
  var artist_name = artistData.dataset.name.split(" ").join("%20");
  var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ea03314c542149f188e6b1f2d26bb3ea&q=${artistData.artist_name}&fq=news_desk%3A%20Arts`;
  $.ajax({
    url: url,
    method: 'GET'
  }).done(function(data) {
    artistArticlesController(data)
  }).fail(function(err) {
    throw err;
  });
}
