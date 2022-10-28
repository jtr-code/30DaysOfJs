// Program to load a js file using Promises and use .then() to display an alert() when the load is complete.//////////////////////////////////

// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => {
//             resolve(src + "It is solved");
//         }
//         document.head.append(script)
//     })

// }

// let a = loadScript('https://jsonplaceholder.typicode.com/todos/1');
// a.then((value) => {
//     console.log(value);
//     alert("Loaded")
// }).catch((err) => {
//     console.log(err)
// })


///////////////////////////////Use the async await with above problem///////////////////////////////////////////////////////////////////////////////

// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => {
//             resolve("Loaded Script" + src);
//         }
//         document.head.append(script);
//     })
// }
// let mainFunc = async () => {
//     let a = await value('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(a);
// }
// mainFunc();

//////////Create a promise which reject after 3 seconds use an async/await to get its value.Use a try/catch to handle the error.//////////

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        rej(new Error("Issue in API!"));//throws error;
    }, 3000);
})

const a = async () => {
    try {
        let c = await promise1;
        console.log(c);
    } catch (error) {
        console.log("This error is handled in try catch block")
    }
}
a();



