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
  const artist_genres = artist_obj.dataset.artist_genres.replace(",", " - ");
  const artist_followers = artist_obj.dataset.artist_followers;
  $('#artist').empty()
  // $('#artist').append(`<div class="row main-artist">`)

  $('#artist').append(`<div class="row"><div class="col-md-6 artist-pic"><img src='${artist_obj.dataset.artist_pic}'/>
    <br /><h4><a href="#" data-name="${chosen_artist.name}" onclick="getArtistArticlesAdapter(this)">${name}
    </a></h4><div><p>followers: ${artist_followers}</p></div>
    <div><p>genres: ${artist_genres}</p></div>
    </div>`)
  
  // $('#artist').prepend(`<img src='${artist_obj.dataset.artist_pic}'/>`)
  // $('#artist').append(`</div>`)

  getAlbumsAdapter(chosen_artist);
}
