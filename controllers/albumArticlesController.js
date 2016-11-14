function albumArticlesController(data){
  // singler(data.items)
  $('.artist-pic').removeClass('col-md-6');
  var src = $("#albumArticles-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var albumsList = template(data.response.docs)
  $("#articles").append(albumsList)
}
