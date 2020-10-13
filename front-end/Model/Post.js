class Post{
    constructor(title, body, featured, pubblico,  tags=["nessun_tag"]){
        this.title=title;
        this.body=body;
        this.tags=tags;
        this.featured=featured;
        this.public=pubblico;
  }
}