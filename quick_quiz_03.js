//Program to print the marks of a students in an object using for in loop.////////////////////////////////////////



const prompt = require("prompt-sync")();

let mark = {
    Jishnu: 99,
    Ajay: 88,
    Arjun: 88,
    Aor: 55
}
for (let i in mark) {
    console.log("Mark of " + i + " is " + mark[i]);
}

//Program to print Try Again until user entered the correct Number.///////////////////////////////////////////////
let crctNum=45;
let n=prompt("Enter the values: ");
for(i=0;i<n;i++){
    if(crctNum!=n){
        console.log("Try Again");
        break;
    }else{
        console.log("Your Prediction was Correct...");
        break;
    }
}

//Program to find the mean of 4 numbers using Functions.

const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4;
}
console.log(mean(1,2,3,4));