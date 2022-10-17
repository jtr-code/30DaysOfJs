//Program to find the sum of 1st n natural numbers;

const prompt = require("prompt-sync")();

let sum = 0;
let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);
for (i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " natural number is " + sum);

///////////////////////////////////////////////for in loop//////////////////////////////////////////////////////////

let object = {
    Jishnu: 90,
    Anurag: 78,
    Aor: 66,
    Ajay: 89

}
for (let a in object) {
    console.log(a);
    console.log("Marks of " + a + " is: " + object[a]); //iterate key of object
}

////////////////////////////////////////////////for of loop/////////////////////////////////////////////////////////

for(let b of "Jishnu"){
    console.log(b); //iterate values of object
}

//////////////////////////////////////////////////while loop////////////////////////////////////////////////////////////

let a=prompt("Enter a value: ");
a=Number.parseFloat(a);
let b=0;
while(b<a){
    console.log(b);
    b++;
}



/////////////////////////////////////////////////////do while////////////////////////////////////////////////////////
d=10;
do{
    console.log(d);
    d++;
}while(d<5); //executed at once (output:10) even if the conditions is false.
