function getAlbumsAdapter(artist){
  event.preventDefault()
  $.ajax({
    method: "GET",
    url: `https://api.spotify.com/v1/artists/${artist.spotify_id}/albums?market=US`

  }).done(function(data){
      //proceed to Album controller
      albumsController(data)
  })
}

