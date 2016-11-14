function albumArticlesController(data){
  // singler(data.items)
  var src = $("#albumArticles-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var albumsList = template(data.response.docs)
  $("#articles").append(albumsList)
}
