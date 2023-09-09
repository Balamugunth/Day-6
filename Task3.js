class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;       
    }

    displayInfo(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}
let person1 = new Person('Bala','26','Male');

person1.displayInfo();
