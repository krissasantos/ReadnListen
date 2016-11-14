function albumArticlesController(data){
    for(var i = 0; i < data.response.docs.length; i++){
    // debugger
    // data.response.docs[1].multimedia.push({url: "../assets/icons/newspaper_icon.jpg"})
    if (data.response.docs[i].multimedia[0] == undefined){
      data.response.docs[i].multimedia.push({url: "./assets/icons/newspaper_icon.jpg"})
    }else{
      data.response.docs[i].multimedia[0].url = "https://static01.nyt.com/" + data.response.docs[i].multimedia[0].url
      }
    }
  // singler(data.items)
  $('.artist-pic').removeClass('col-md-6');
  var src = $("#albumArticles-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var albumsList = template(data.response.docs)
  $("#articles").append(albumsList)
}
