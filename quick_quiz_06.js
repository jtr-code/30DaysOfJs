//*Note
//This not works in Vscode because of window's property like alert(),confirm() is used..

//Write a program using prompt function to take input as age as a value from user and use alert to tell him if he can drive.///////////////////////////////////////////////

const prompt = require("prompt-sync")();

let age = prompt("Enter your age: ");
age = Number.parseInt(age);

if (age > 18) {
    alert("You can drive..");

} else {
    alert("You cant drive.");
}

//In above qn use confirm to ask user if he want to see the prompt again////////////////////////////////////////////////////////////////////////////////////////////////

let runAgain = true;
while (runAgain) {
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);
    if (age >= 18) {
        alert("You can drive..");
    } else {
        alert("You cant drive.");//cant use alert in js engine,becoz of windows object. alert() is a browser's window property and does not exist in nodejs which is for server side.
    }
    runAgain = confirm("Do you want to play again?")
}


////////////////////////////////////////In previous question use console.error to log the error if age is negative./////////////////////////////////////////////////////

let runAgain = true;
while (runAgain) {
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);
    if (age < 0) {
        console.error("please enter a valid age");//error logs in window's console.
    }
    if (age >= 18) {
        alert("You can drive..");

    } else {
        alert("You cant drive.");
    }
    runAgain = confirm("Do you want to play again?");
}

/////////////////////////////////////////////Write a program to redirect the url to w3schools.com if user enter the number less than 6.////////////////////////////////////

let number = prompt("Enter the number: ");
number = Number.parseInt(number);

if (number < 6) {
    location.href = "https://w3schools.com";
}

///////////////////////////////Change the background colour of webpage based on user input through prompt//////////////////////////////////////////////////////////////////

let bgcolor = prompt("Enter the color of background to change: ");
document.body.style.background = bgcolor;