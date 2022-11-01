class Animal{
    constructor(color, breed) {
        this.color = color;
        this.breed = breed;
    }
    dog() {
        console.log(`The breed is ${this.breed} with colour ${this.color}`);
}    
}
let germanShepherd = new Animal("black", "germanShepherd");
let husky = new Animal("grey", "husky");
germanShepherd.dog();
husky.dog();

//logs
/*The breed is germanShepherd with colour black
The breed is husky with colour grey*/
