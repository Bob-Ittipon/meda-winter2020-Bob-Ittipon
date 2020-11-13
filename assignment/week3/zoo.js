class Mammal {
    constructor() {
        this.tail = 1;
        this.type = "mammal";
        this.eyes = 2;
    }

    eat() {
       
        if("name" in this){
            console.log(this.name + " eats some food");
        }
       else{
        console.log("Animal eats some food");
       }
    }


}


class Dog extends Mammal{
    constructor(dogName){
        super();//This function runs the constructor pf the class we are inheriting. it is important to run it first before any other lines of our dog constructir ckass.
        this.legs = 4;
        this.name = dogName;
        
        

    }
    bark(){
        console.log("woof woof!");
    }
}

class Cat extends Mammal{
    constructor(){
        this.legs = 4;
        this.name = null;
        
    }
    meow(){
        console.log("meow!");
    }
}

let animal1 = new Dog("Roger");

animal1.bark();
animal1.eat();