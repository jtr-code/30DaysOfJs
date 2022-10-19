let num = [1, 2, 3, 45, 5];
console.log(num.toString()); //1,2,3,34,5

let b = num.push(34); //push a new element to last
console.log(b); //6,return the length
console.log(num); //[ 1, 2, 3, 45, 5, 34 ]

let c = num.pop();
console.log(c); //delete last element 34
console.log(num); //[ 1, 2, 3, 45, 5 ]

let d = num.shift(); //delete 1st element
console.log(d); //1
console.log(num); //[ 2, 3, 45, 5 ]

let e = num.unshift("hello"); //insert new element on Beginning

console.log(num); //[ 'hello', 2, 3, 45, 5 ]
