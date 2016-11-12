function getAlbumsAdapter(artist){
  event.preventDefault()
  $.ajax({
    method: "GET"
    url: `https://api.spotify.com/v1/artists/{id}/albums`

  }).done(function(data){
      //proceed to Album controller
      albumsController()
  })
}