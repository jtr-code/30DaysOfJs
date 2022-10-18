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
do {
    a = prompt("Enter a number: ");
    a = Number.parseInt(a);
    num.push(a);

} while (a != 0);

console.log(num);

//Filter the numbers that are divisible by 10 from a given array.///////////////////////////////////////////////////

let arr = [20, 30, 1, 4, 55, 40];

let divisible = ((e) => {
    return e % 10 == 0;
})

let filteredResult = arr.filter(divisible);

console.log(filteredResult);//[ 20, 30, 40 ]

//Create an array of square of given numbers.//////////////////////////////////////////////////////////////////////////

let newArr = [1, 3, 5, 7, 9];

let squareArr = newArr.map((e) => {
    return e * e;
})
console.log(squareArr);//[ 1, 9, 25, 49, 81 ]

//Use reduce to calculate the factorial of given number from an array of first n natuaral numbers.n being the no. whose factorial is needed to be calculated.

let array = [1, 2, 3, 4, 5];

let factValue = array.reduce((num1, num2) => {
    return num1 * num2;
})
console.log(factValue);//120

