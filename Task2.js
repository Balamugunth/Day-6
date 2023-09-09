class Circle{
    constructor(radius,color){
        this.radius;
        this.color;
    }

    get radius(){
    this.radius
    }
    set radius(){
    Radius = this.radius
    }
    get color(){
    this.color
    }
    set color(){
    Color = this.color
    }
    get area(){
    let Area = 3.14 * this.radius * this.radius
    }
    get circumference(){
    let circumference = 2 * 3.14 * this.radius
    }
}
let circle = new Circle(5,'blue');
circle.area;
circle.circumference;