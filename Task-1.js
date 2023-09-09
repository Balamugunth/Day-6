class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;       
    }

    displayInfo(){
        console.log(`Movie info:`);
        console.log(`------------`);
        console.log(`Title: ${this.title}`);
        console.log(`Studio: ${this.studio}`);
      
    }
    Rating(){
        console.log(`Rating: ${this.rating}`);
    }
}
let movie1 = new Movie('Casino Royal','EON Productions','PG13');

movie1.displayInfo();
movie1.Rating();
