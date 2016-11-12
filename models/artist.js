const Artist = (function(){

  let id = 0;
  
  return class Artist {

    constructor(name, spotify_id){
      this.name = name;
      this.spotify_id = spotify_id
      this.id = ++id;
      store.artists.push(this);
    }
  }
}())