const prompt_fn = require('prompt-sync')();

try {
    let age = prompt_fn("Enter your age: ")
    age = Number.parseInt(age);
    if (age > 100) throw new Error("Not possible");//custom error

} catch (err) {
    console.log(err.name);//Error
    console.log(err.message);//Not possible
    console.log(err.stack);
    /*Error: Not possible
    at Object.<anonymous> (c:\Users\jishn\OneDrive\Desktop\Javascript\20_try_catch.js:6:26)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47*/
}