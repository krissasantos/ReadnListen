function getArtistsAdapter(){
  event.preventDefault();
  var artist_name = $('#artist_query').val();
  $("div").not(".container-fluid").empty()
  $("#nav").append('<form><input type="text" name="artist_query" placeholder="Artist Name" id="artist_query"/><input type="submit" class="btn btn-default" onclick="return validateForm()"/></form>');
  $.ajax({
    method: "GET",
    url: `https://api.spotify.com/v1/search?q=${artist_name}&type=artist`,
  }).done(function(data){
    artistsController(data);
  }).fail(function(err) {
    showError();
  });
}