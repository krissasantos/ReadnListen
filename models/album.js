const Album = (function(){

  let id = 0;
  
  return class Album {

    constructor(name, artist_id){
      this.name = name;
      this.artist_id = artist_id;
      this.id = ++id;
      store.albums.push(this);
    }
  }
}())