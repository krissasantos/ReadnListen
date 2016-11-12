function albumsController(data){
  // singler(data.items)
  var src = $("#albums-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var albumsList = template(data.items)
  $("#albums").append(albumsList)
}

function chooseAlbum(album_obj){
  const album_name = album_obj.dataset.album_name
  const artist_name = album_obj.dataset.artist_name
  const artist_id = album_obj.dataset.artist_id
  // const album_img = album_obj.dataset.album_img
  const chosen_album = new Album(album_name, artist_name, artist_id)
  $('#albums').empty()
  $('#albums').append(`<br>${chosen_album.artist_name}</br>`)
  $('#albums').append(`<br>${chosen_album.name}</br>`)
  $('#albums').append(`<img src='${album_obj.dataset.album_img}'/>`)
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
