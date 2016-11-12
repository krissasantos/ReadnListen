function artistArticlesController(data){
  // singler(data.items)
  $("#albums").empty();
  var src = $("#artistArticles-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var articleList = template(data.response.docs)
  $("#articles").append(articleList)
}