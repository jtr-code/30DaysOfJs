let arr = [11, 12, 13, 14, 15];
for (i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

for (let item in arr) {
    console.log(arr[item]);
}

for (let i of arr) {
    console.log(i);
}

/////////////////////////////////////forEach/////////////The forEach() method calls a function and iterates over the elements of an array.

let num = [1, 2, 3, 4, 5];

num.forEach((element) => {
    console.log(element + element);//2,4,6,8,10 (element+element) ,1+1=2,2+2=4,3+3=6...

})
console.log(num);//[1, 2, 3, 4, 5]

////////////////////////for_in_and_for_of_loop/////////////////////////////////////////////////////////////////////

let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",[keys]
}

for (let i of list) {
    console.log(i); // "4", "5", "6",[values]
}