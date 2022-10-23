////////////////////////////setTimeout///////////////////execute once with a given period of time////////////////////


let name = "Jishnu t raj"

let stopTimeout=setTimeout(() => {
    console.log(`${name}is running`);
    
}, 3000);

////////////////////////////////////////////setInterval////////////////////repeatdly execute with given period of time//

let nameFrnd = "Ajay Balan"

let stopInterval = setInterval(() => {
    console.log(`${name} is running with ${nameFrnd}`);
    
}, 3000)


clearInterval(stopInterval);//stops the execution
clearTimeout(stopTimeout);//stops the execution