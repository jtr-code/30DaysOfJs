let array = [22, 11, 10, 1232, 1];
console.log(array.sort());//[ 1, 10, 11, 1232, 22 ],The sort() sorts the elements as strings in alphabetical and ascending order.

//print in ascending order
let compare = (a, b) => {
    return a - b;
}

console.log(array.sort(compare));//created a compare function to fix the sorting issue in numbers. //[ 1, 10, 11, 22, 1232 ]

//print in descending order

let compareFunction = (a, b) => {
    return b - a;
}

console.log(array.sort(compareFunction));//[ 1232, 22, 11, 10, 1 ]

let d = delete array[0];
console.log(d);
console.log(array);//[ <1 empty item>, 22, 11, 10, 1 ]
console.log(array.length)//the array size will not reduce even if we use the delete operator.

//Splice //////////////////////////////////Used to add new element to array.


let newArray = [1, 2, 3, 4, 5];
newArray.splice(2, 3, 34, 35, 36, 56, 5);//(Position to add,No. of elements to remove,elements to be added....);(pos of 2,deleting the elements 3,4,5 then adding elements to that place).
console.log(newArray)

/*output
[
   1,  2, 34, 35,
  36, 56,  5
]
*/

///////////slice///////////slice out a piece from an array.It create new array.

const num = [11, 22, 33, 44, 55, 66, 77];

console.log(num.slice(2));//[ 33, 44, 55 ,66 ,77 ]

console.log(num.slice(2, 3));//[33]

console.log(num.slice(1, 5));//[ 22, 33, 44, 55 ],starting from 1 to postion 4;

console.log(num.slice(0, 6))//[ 11, 22, 33, 44, 55, 66 ]


////reverse//////////////////////reverse the soring to the source array.

num.reverse();
console.log(num);
/*[
    77, 66, 55, 44,
    33, 22, 11
  ]*/

//concat/////////////////////////

let name = ["Jtr", "Jishnu"];
let newName = ["Ajay", "Balan"];

name.concat(newName)
console.log(name.concat(newName))//[ 'Jtr', 'Jishnu', 'Ajay', 'Balan' ]