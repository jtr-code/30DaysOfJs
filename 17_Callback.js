// const name = ((data) => {
//     console.log("Place "+data);
// })

// const place = (callback) =>{
//     callback("kerala")
// }

// place(name);

// let sum = ((a, b) => {
//     sum = a + b
//     console.log(sum);
// })

// let variables = ((cb) => {
//     cb(5, 2);
// })

// variables(sum)


console.log("Start");

function getDataFromApi(callback) {
    setTimeout(() => {
        callback("Jishnu t raj");
    }, 2000);
}


function getDataFromApi2(callback) {
    setTimeout(() => {
        callback(" is");
    }, 2000);
}
function getDataFromApi3(callback) {
    setTimeout(() => {
        callback(" op");
    }, 2000);
}
// console.log(getDataFromApi());

getDataFromApi((value) => {
    getDataFromApi2((api2val) => {
        // console.log(value + api2val);
        getDataFromApi3((api3val) => {
            console.log(value + api2val + api3val);//callback hell or pyramid of doom(takes total 6 seconds to print the values) 
        })
    })
})

console.log("end"); 