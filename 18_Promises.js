//////////////The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.////


// let resPromise = new Promise((resolve, reject) => {
//     console.log("Promise 1 is pending..");
//     resolve("I am resolved");

// })

// let rejPromise = new Promise((resolve, reject) => {
//     console.log("Promise 2 is pending.. ");
//     reject("Rejected");
// })

// resPromise.then(() => {
//     console.log("fullfulled promise 1")
// })

// rejPromise.then(() => {
//     console.log("I am not resolved promise 2");

// }).catch((err) => {
//     console.log(err)
// })


///////////////////////////////////////////////////PROMISE with array/////////////////////////////////////////////////////////////////////

const promise1 = new Promise((resolve, reject) => {
    console.log("Promise 1");
    // resolve(["Javascript", "Java"]);
    reject("API Failed!(Promise1)");
})

const promise2 = new Promise((resolve, reject) => {
    console.log("Promise 2");
    resolve(["React", "Vue"]);
    // reject("API Failed!(Promise2)");
})
// promise1.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// promise2.then((res) => {
//     console.log(res)
// }).catch((err) => {              //handling the error//
//     console.log(err)
// })

const promiseAll = Promise.all([promise1, promise2]);  //promise.all  //to call all the promise
promiseAll.then((res) => {
    console.log(res)//[ [ 'Javascript', 'Java' ], [ 'React', 'Vue' ] ](but both promises must be resolved to show the output)
}).catch((err) => {
    console.log(err);
})


 const promiseAny = Promise.any([promise1, promise2]);  //promise.any  //return only single promise which 1st resolve the operation
promiseAny.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err);//[ 'React', 'Vue' ]
})



//////////////////////////////////////////////allSettled//////////////////////////////////////////////////////////////////////////////


const promiseAllSettled = Promise.allSettled([promise1, promise2]);
promiseAllSettled.then((res) => {
    console.log(res)
    //logs
    /*
    [
  { status: 'rejected', reason: 'API Failed!(Promise1)' },
  { status: 'fulfilled', value: [ 'React', 'Vue' ] }
]*/
})

const promiseRace = Promise.race([promise1, promise2]);  //promise.race  //return only 1st promise if it resolved the operation
promiseRace.then((res) => {
    console.log(res)//no output becoz the 1st promise is not resolved
}).catch((err) => {
    console.log("Race"+err);//RaceApi Failed
})


///Mutliple Handling//


// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello")
//   }, 2000);  
// })

// p1.then((value) => {
//     console.log(value)
// }).then(()=>{
//     return new Promise((resolve, reject) => {
//         // alert("Good Morning")
//     })
// })