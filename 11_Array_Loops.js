let arr = [11, 12, 13, 14, 15];
// for(i=0;i<=arr.length;i++){
//     console.log(arr[i]);
// }

for(let item in arr){
    console.log(arr[item]);
}

for (let i of arr){
    console.log(i);
}