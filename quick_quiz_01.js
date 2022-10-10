//Prgm to add a String and add a Number to it.

let name="Jishnu";
let num=5;
console.log(name+num);

//use typeOf operator to find the type of above question.

console.log(typeof (name+num));
//.console.log(typeof name+num); output will be string5;

//Create a const object and Can you change it to hold a number later?

const fetchNumber={
    num1:25,
    condition:false

}
// fetchNumber=25;
// console.log(fetchNumber); error TypeError: Assignment to constant variable.
num1=26;
console.log(num1);//no error because fetchNumber is reference variable it point to the objects,so changing the object data or modify makes no error .

//Try to add new key to const object in above problem.

fetchNumber["friend"]="Ajay Balan";
console.log(fetchNumber); //output: { num1: 25, condition: false, friend: 'Ajay Balan' }