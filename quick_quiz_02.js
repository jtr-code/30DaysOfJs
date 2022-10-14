//Problem to find the age lies betwee 10 and 20.
const prompt=require("prompt-sync")();

// let age=prompt("What is your age? ");
// if(age>10 && age<20){
//     console.log("Your age lies between 10 and 20");

// }else{
//     console.log("Your age is not lies between 10 and 20");
// }

//Problem to find whether a no. is divisible by 2 and 3.

let num=prompt("Enter a number: ");
if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3");
}else{
    console.log("Your number is not divisible by 2 and 3");
}