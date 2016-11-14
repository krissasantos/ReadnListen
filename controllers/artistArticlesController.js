function artistArticlesController(data){
  // singler(data.items)

  $("#albums").empty();
  $('.artist-pic').removeClass('col-md-6');
  var src = $("#artistArticles-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var articleList = template(data.response.docs)
  $("#articles").append(articleList)

}