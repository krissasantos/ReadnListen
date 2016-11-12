function albumsController(data){
  // singler(data.items)
  var src = $("#albums-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var albumsList = template(data.items)
  $("#albums").append(albumsList)
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
