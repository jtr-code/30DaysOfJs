class race {
    run() {
        console.log(`${this.name} is run with age ${this.age}`);
    }
    fill(name,age){
        this.name = name;
        this.age = age;
     }
}

class marathon {
    running() {
        console.log(`${this.name} is running with age ${this.age}`);
    }
    fill(name,age){
        this.name = name;
        this.age = age;
     }
}
let ajay = new race();
ajay.fill("Ajay",22)
let jishnu = new marathon();
jishnu.fill("jishnu",22)
ajay.run();
jishnu.running()

