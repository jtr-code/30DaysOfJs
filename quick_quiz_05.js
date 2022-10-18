// Create an array of no.s and take input from the user to add the number to this array.////////////////////////////

const prompt = require("prompt-sync")();

let numArray = [2, 4, 5, 6, 7, 6];

let n = prompt("Enter a number to push to array: ");//8

n = Number.parseInt(n);

numArray.push(n);

console.log(numArray);
//logs
/*[
    2, 4, 5, 6,
    7, 6, 8
  ]*/


//Keeping adding numbers to the array until 0 is added to the array./////////////////////////////

let num = [1, 2, 3, 4, 5];


let a;
do{
     a=prompt("Enter a number: ");
    a=Number.parseInt(a);
    num.push(a);

}while(a!=0);
console.log(num)