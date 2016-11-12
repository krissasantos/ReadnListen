const AlbumArticle = (function(){

  let id = 0;

  return class AlbumArticle {

    constructor(article_name, artist_name, album_name){
      this.article_name = article_name;
      this.artist_name = artist_name;
      this.album_name = album_name;
      this.id = ++id;
      store.artistArticles.push(this);
    }
  }
}())
