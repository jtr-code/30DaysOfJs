const prompt = require("prompt-sync")(); //Imported the prompt function bcoz window obj is not defined in Nodejs envt.

let age = prompt("Enter your age: ");
age = Number.parseInt(age);

if (age < 0) {
    console.log("Invalid age");

} else if (age > 18 && age <= 60) {
    console.log("You are valid for driving licence..");

} else if (age > 0 && age < 18) {
    console.log("You are kid, wait for the 18th bday");
} else {
    console.log("Done!");
}
console.log("You are",(age < 18) ? "not valid for the licence" : "valid for the licence");//ternary operator
