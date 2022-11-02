//Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.

class Student {
    constructor(name) {
        this.name = name;
        console.log("Student name is " + name + " and age is " + Student.studentAge(5));
    }
    static studentAge(age) {
        return age;
        
    }
}

let obj1 = new Student("jtr", Student.studentAge(5));
