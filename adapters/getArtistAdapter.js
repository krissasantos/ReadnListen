function getArtistsAdapter(){
  event.preventDefault();
  var artist_name = $('#artist_query').val();

  $.ajax({
    method: "GET",
    url: `https://api.spotify.com/v1/search?q=${artist_name}&type=artist`,
    //error: displayError
  }).done(function(data){
    console.log(data);
  })
}