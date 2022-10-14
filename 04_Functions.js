function square(number) {
  return number * number;
}
console.log(square(5))

function sumTwoNum(a, b) {
  return sum = a + b;
}
console.log(sumTwoNum(5, 3));


//When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function
function changeNameData(myObj) {
  myObj.name = "JTR";

}
const myData = {
  name: "jishnu",
  date: "19-09-2000",
  place: "kerala"
}

console.log(myData.name) //jishnu

changeNameData(myData);

const y = myData.name;

console.log(y) //jtr

////////////////////////////////////////////////////Fat Arrow Function/////////////////////////////////////////////////////////////////////

const sumNum = (a, b) => {

  let c = a + b;

  return c;
}
let x = sumNum(5, 5);

console.log(x);
