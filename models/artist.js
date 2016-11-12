const Artist = (function(){

  let id = 0;

  return class Artist {

    constructor(name){
      this.name = name;
      this.id = ++id;
      store.artists.push(this);
    }
  }
}())
