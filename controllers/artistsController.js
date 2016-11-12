function artistsController(data){
  for (var i = 0; i<data.artists.items.length; i++){
    $('#artist_name').append(data.artists.items[i].name)
  }
}