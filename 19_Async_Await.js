
import fetch from "node-fetch";

console.log("Started");
getData();
console.log("ended");


//////////////----.then method----/////////////////

async function getData() {
    fetch('https://dummyjson.com/products/1')
        .then((fetchData) => {
            return (fetchData.json());
        }).then((fetchData) => {
            console.log(fetchData);
        })
}

    ////////////////////----await method----////////////////////////
 
async function getValue() {
    const fetchData = await fetch('https://dummyjson.com/products/1');
    const jsonData = await fetchData.json();
    console.log(jsonData);
}
console.log('1');
getValue();
console.log("2");

