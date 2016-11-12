const ArtistArticle = (function(){

  let id = 0;

  return class ArtistArticle {

    constructor(article_name, artist_name){
      this.article_name = article_name;
      this.artist_name = artist_name;
      this.id = ++id;
      store.artistArticles.push(this);
    }
  }
}())
