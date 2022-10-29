// Program to load a js file using Promises and use .then() to display an alert() when the load is complete.//////////////////////////////////

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(src + "It is solved");
        }
        document.head.append(script)
    })

}

//.then way-------------


// let a = loadScript('https://jsonplaceholder.typicode.com/todos/1');
// a.then((value) => {
//     console.log(value);
//     alert("Loaded")
// }).catch((err) => {
//     console.log(err)
// })

//async/await way-------------------------------------------

const fetchUrl = async () => {
    const valueLoadScript = await loadScript('https://jsonplaceholder.typicode.com/todos/1');
    console.log(valueLoadScript);
}
fetchUrl();




///////////////////////////////Use the async await with above problem///////////////////////////////////////////////////////////////////////////////

const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve("Loaded Script" + src);
        }
        document.head.append(script);
    })
}
let mainFunc = async () => {
    let a = await value('https://jsonplaceholder.typicode.com/todos/1');
    console.log(a);
}
mainFunc();

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

//Write a Program using Promise.all() inside an async/await to await 3 promises.Compare its result with the case where we await these promises one by one.

console.time()
const promise0 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Its solved at 2 seconds");
    }, 2000);
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Its solved at 3 seconds");
    }, 3000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Its solved at 4 seconds");
    }, 4000);
})

const value = async () => {
    // console.log("start")
    // // let promise0Value = await promise0;
    // // let promise1Value = await promise1;
    // // let promise2Value = await promise2;
    // // console.log(promise0Value, promise1Value, promise2Value);//it tooks 4+seconds
    // // console.log("end")
    console.log("start")
    let promise0Value = promise0;
    let promise1Value = promise1;
    let promise2Value = promise2;
    let promiseAll = await Promise.all([promise0Value, promise1Value, promise2Value]);//it took 0.561ms
    console.log(promiseAll);
    console.log("end")
    console.timeEnd();

}

value();