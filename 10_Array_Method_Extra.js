let array = [22, 11, 10, 1232, 1];
console.log(array.sort());//[ 1, 10, 11, 1232, 22 ],The sort() sorts the elements as strings in alphabetical and ascending order.

//print in ascending order
let compare = (a, b) => {
    return a - b;
}

console.log(array.sort(compare));//created a compare function to fix the sorting issue in numbers.

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
newArray.splice(2,3,34,35,36,56,5);//(Position to add,No. of elements to remove,elements to be added....);(pos of 2,deleting the elements 3,4,5 then adding elements to that place).
console.log(newArray)

/*output
[
   1,  2, 34, 35,
  36, 56,  5
]
*/

