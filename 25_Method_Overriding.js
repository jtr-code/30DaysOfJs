class Vehicle {
    run() {
        console.log("Vehicle is running");
    }
}
class Car extends Vehicle {
    run() {
        console.log("Car is running");
    }
}

let obj1 = new Car();
obj1.run();
