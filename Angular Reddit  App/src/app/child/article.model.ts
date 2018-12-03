export class Article {
  
  
    title:string;
    link : string;
    votes = 0

    constructor(title , link){
        this.title =  title;
        this.link = link;
    }
}