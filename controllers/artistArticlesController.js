function artistArticlesController(data){
  // singler(data.items)
  for(var i = 0; i < data.response.docs.length; i++){
    // debugger
    // data.response.docs[1].multimedia.push({url: "../assets/icons/newspaper_icon.jpg"})
    if (data.response.docs[i].multimedia[0] == undefined){
      data.response.docs[i].multimedia.push({url: "./assets/icons/newspaper_icon.jpg"})
    }else{
      data.response.docs[i].multimedia[0].url = "https://static01.nyt.com/" + data.response.docs[i].multimedia[0].url
  }
}
  // debugger
  $("#albums").empty();
  $('.artist-pic').removeClass('col-md-6');
  var src = $("#artistArticles-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var articleList = template(data.response.docs)
  $("#articles").append(articleList)

}
