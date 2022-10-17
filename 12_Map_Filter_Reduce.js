////////////////////////////////map//////////Returns new array by performing some operation on each array element///

let num = [1, 2, 3, 4, 5];
num.map((value, index) => {
    let sum = value + index;
    console.log(`The value ${value} will add to the index ${index} will result ${sum}`);
    //logs
    /* 
    The value 1 will add to the index 0 will result 1
    The value 2 will add to the index 1 will result 3
    The value 1 will add to the index 0 will result 1
    The value 2 will add to the index 1 will result 3
    The value 3 will add to the index 2 will result 5
    The value 4 will add to the index 3 will result 7
    The value 5 will add to the index 4 will result 9
    */

})

let numbers = [10, 20, 30, 40, 50];

let newArr = numbers.map(numMultiply);
console.log(newArr);//[ 100, 200, 300, 400, 500 ]

function numMultiply(num) {
    return num * 10;
}

////////////////filter///////////filters an array with values that passes a specified condition,creates a new array

let cities = [
    { name: "kannur", population: 12323 },
    { name: "kozhikode", population: 23414 },
    { name: "thrissur", population: 32542 },
    { name: "trivandrum", population: 13432 },
    { name: "wayanad", population: 18432 }
]

let filterPops = cities.filter((e) => {
    return e.population < 15000;
})

console.log(filterPops);
// logs
/*[
    { name: 'kannur', population: 12323 },
    { name: 'trivandrum', population: 13432 }
]
*/

////////////////////////////Reduce/////////reduce an array to single value////////////////////////////////////////

let arrNum = [11, 12, 13, 14, 15];

let newNum=arrNum.reduce((num1,num2)=>{
        return num1+num2;
})
console.log(newNum);//65
console.log(typeof newNum)//number
