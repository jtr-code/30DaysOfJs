
//Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

class Parent {
    constructor(name, place) {
        this.name = name;
        this.place = place;
    }
    displayDetails() {
        console.log(`The name is ${this.name} and place is ${this.place}`);

    }
}

class Child extends Parent {

    displayAdditional() {
        console.log("Cute boi");
    }
}

let obj1 = new Parent("Jishnu", "kerala");
let obj2 = new Child();

obj1.displayDetails();
obj2.displayAdditional();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Vehicle {
    Vehiclerun() {
        console.log("Vehicle is running");
    }
}
class Car extends Vehicle {
    CarRun() {
        console.log("Car is running");
    }
}
let obj = new Car();
obj.Vehiclerun()//Calling Vehiclerun method with Car object but cant call Vehicle object for CarRun();