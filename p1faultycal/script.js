//  let see the faculty calculator

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let random = Math.random()
console.log(random);
let a = prompt("Enter your first number");
let c = prompt ("Enter your operation");
let b = prompt("Enter your second number");

let obj = {
    
    "+" : "-",

    "*" : "+",

    "-" : "/",

    "/" : "**"

}



if ( random > 0.1){

    console.log(`The result of two numbers are ${eval (`${a} ${c} ${b}`)}`)
    alert(`The result of two numbers are ${eval (`${a} ${c} ${b}`)}`)

}

else{

    c = obj[c]
    console.log(`The result of two numbers are ${eval (`${a} ${c} ${b}`)}`)
    alert(`The result of two numbers are ${eval (`${a} ${c} ${b}`)}`)
}
