//Arrays are mutable and can be of different types.

let arr = [1, 2, 3, 4, 5];
console.log(arr);

//In JavaScript Arrays are Objects.

console.log(typeof arr);//object

//Arrays can be of different types.

let arr1 = [1, "Jishnu", false, null];
console.log(arr1);//[ 1, 'Jishnu', false, null ]

//Arrays can be changed.

arr1[1] = "JTR";
console.log(arr1[1]);//JTR
console.log(arr1);//[ 1, 'JTR', false, null ]

arr1[2] = true;
console.log(arr1[2]);//true
console.log(arr1)//[ 1, 'JTR', true, null ]