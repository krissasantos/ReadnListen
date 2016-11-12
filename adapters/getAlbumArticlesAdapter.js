function getAlbumArticlesAdapter(albumData){
  event.preventDefault()
  var artist_name = albumData.artist_name.split(" ").join("%20");
  var album_name = albumData.name.split(" ").join("%20");
  var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ea03314c542149f188e6b1f2d26bb3ea&q=${albumData.artist_name}%20${albumData.name}&fq=news_desk%3A%20Arts`;
  $.ajax({
    url: url,
    method: 'GET'
  }).done(function(data) {
    albumArticlesController(data)
  }).fail(function(err) {
    throw err;
  });
}
