
class Car{
    constructor(make, model, year){
        this.make = make;
        this.year = year;
        this.model = model;
        this.currentGas = 0;
        this.registeredDate = new Date(Date.now());

    }
    checkFuel(){
        console.log((this.make)+" "+(this.model)+" "+(this.currentGas));
    }
    reFuel(gallons){
        if(typeof gallons ==="number"){
            this.currentGas += gallons;
            console.log("reFuel Seccess!! added "+gallons+" to the tank");
        }else{
            console.log("Input need a valid number!!");
        }
        
    }
}
let car3 = new Car("Tesla","X",2019);
let car1 = new Car("Toyota","Yaris",2010);
let car2 = new Car("Honda","Civic",2015);
let car4 = new Car("BMW","I8",2017);

car1.checkFuel();
car1.reFuel(500);
car1.checkFuel();