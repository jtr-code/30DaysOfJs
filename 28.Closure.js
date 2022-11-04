function Student() {
    let name = "jishnu";
    function displayName() {
        console.log(name);
    } displayName()
}
Student();

//---example:2--


function makeAdder(x) {
    return function (y) {
        return x + y;
        
    };
}

const add5 = makeAdder(5);//closure
const add10 = makeAdder(10);//closure

console.log(add5(2)); // 7
console.log(add10(2)); // 12


/*
In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.*/



//  link:https://jsfiddle.net/vnkuZ/7726/