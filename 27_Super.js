class Teacher {
    constructor(name) {
        this.name = name;
        console.log(name);

    }
}

class Student extends Teacher {
    constructor(name, place) {
        super(name);//By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods:
        this.place = place;
        console.log(name + place);
    }

}

let obj1 = new Teacher("Sajini");
let obj2 = new Student("Sreeja", "Kerala");
