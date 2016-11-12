function albumsController(data){
  //check nesting data to get to albums and album's name
  for (var i = 0; i < data.length; i++){
     $('#albums').append(data.items[i].name)
  }
}
