function albumsController(data){
  var src = $("#albums-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var albumsList = template(data.items)
  $("#albums").append(albumsList)
}

function chooseAlbum(album_obj){
  const album_name = album_obj.dataset.album_name
  const artist_name = album_obj.dataset.artist_name
  const artist_id = album_obj.dataset.artist_id
  const chosen_album = new Album(album_name, artist_name, artist_id)
  $('#albums').empty()
  getAlbumArticlesAdapter(chosen_album);
}

// function singler(albums){
//   let album_names = []
//   let single_albums = []
//   for (var i = 0; i < albums.length - 1; i++){
//    debugger
//     if(!album_names.includes(albums[i].name)){
//       album_names.push(albums[i].name)
//       single_albums.push(albums[i])
//     }
//   }
//   debugger
//   return single_albums
// }
