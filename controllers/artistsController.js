function artistsController(data){
  var src = $("#artists-template")[0].innerHTML;
  var template = Handlebars.compile(src);
  var artistList = template(data.artists.items);
  $("#artist").append(artistList);
}

function chooseArtist(artist_href){
  artist_href.dataset.artist_genres = artist_href.dataset.artist_genres.replace("," , " - ")
  var src = $("#artistInfoTemplate")[0].innerHTML;
  var template = Handlebars.compile(src);
  var artist = template(artist_href);
  $('#artist').empty();
  $('#artist').append(artist);

  const name = artist_href.dataset.artist_name;
  const spotify_id = artist_href.dataset.artist_id;
  const chosen_artist = new Artist(name, spotify_id);
  getAlbumsAdapter(chosen_artist);
}
