function artistsController(data){
  var src = $("#artists-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var artistList = template(data.artists.items)
  $("#artist").append(artistList)
}

function chooseArtist(artist_obj){
  const name = artist_obj.dataset.artist_name;
  const spotify_id = artist_obj.dataset.artist_id;
  const chosen_artist = new Artist(name, spotify_id);
  $('#artist').empty()
  $('#artist').append(`<br /><a href="#" data-name="${chosen_artist.name}" onclick="getArtistArticlesAdapter(this)">${chosen_artist.name}</a>`)
  $('#artist').append(`<img src='${artist_obj.dataset.artist_pic}'/>`)
  getAlbumsAdapter(chosen_artist);
}
