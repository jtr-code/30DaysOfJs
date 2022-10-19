let name = "Jishnu";
console.log(name.length);//6;

let place = "Kerala";
console.log(place.slice(2));//rala
console.log(place.slice(1, 4));//era (4th not included)

let name1 = "Ajay";
let x = name1.toUpperCase();
console.log(x);//AJAY

let y = name1.toLowerCase();
console.log(y);//ajay

let z = name1.replace("Aj", "BZ");
console.log(z);//BZay,change the "aj" character to BZ.

let p = "           JTR           ";
console.log(p.trim());//Remove whitespace on both sides(if no character there).eg:"    jtr   !" output:jtr   !.

console.log(name[0]);//J
console.log(name[1]);//i
console.log(name[2]);//s
console.log(name[3]);//h
console.log(name[4]);//n
console.log(name[5]);//u
