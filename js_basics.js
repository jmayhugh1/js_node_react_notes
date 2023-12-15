

//string concat
console.log('Hello' + 'World')
// type conversion
//when an operation of one type is performed on another type, the latter is converted to the former
//string to number
console.log('1' + 1)
console.log('1' - 1)
console.log('1' * 1)
//declaring variables
//can use var or let, var has global scope, let has block scope
var x = 1
let y = 2
//const is used for constants
const z = 3
//objects
// how to get input from user
//let name = prompt('What is your name?')
// conditionals 
if (console) {
    console.log('console is true');
}
//semicolons are optional
//loops
function greet() {
    return {
      message: 'Hello'
    };
  }
  
  console.log(greet());
  function greet2() {
    return {
      message: 'Hello'
    }
  }
  console.log(greet2());


  //loops

    //for loop
    for (let i = 0; i < 5; i++) {
        console.log('Hello World', i);
    }
    //while loop
    let j = 0;
    while (j < 5) {
        console.log('Hello World', j);
        j++;
    }
    //do while loop
    let k = 0;
    do {
        console.log('Hello World', k);
        k++;
    } while (k < 5);

    //switch case
    let role = 'guest';
    switch (role) {
        case 'guest':
            console.log('Guest User');
            break;
        case 'moderator':
            console.log('Moderator User');
            break;
        default:
            console.log('Unknown User');
    }
    
    //fnctions 
    const square = function(number) {
        return number * number;
    }
    console.log(square(5));


    //scope
    if (true) {
        var X = 1
        let Y = 2
        console.log(X,Y)
    }
  
    console.log(X,1)

    //function values can be passed as arguments to other functions
    function add(a,b) {
        return a + b
    }
    function subtract(a,b) {
        return a - b
    }
    function multiply(a,b) {
        return a * b
    }
    function divide(a,b) {
        return a / b
    }
    function calculate(a,b,operator) {
        return operator(a,b)
    }
    console.log(calculate(1,2,add))
    console.log(calculate(1,2,subtract))
    console.log(calculate(1,2,multiply))
    console.log(calculate(1,2,divide))

    // alternative way to define functions
    const add2 = (a,b) => {
        return a + b
    }
    console.log(add2(1,2))
    const subtract2 = (a,b) => a - b
    console.log(subtract2(1,2))

    //optinal arguments
    function sum() {
        let total = 0
        for (let value of arguments)
            total += value
        return total
    }
    console.log(sum(1,2,3,4,5))


    //default arguments
    function interest(principal, rate = 3.5, years = 5) {
        return principal * rate / 100 * years
    }

    //recursion
    function factorial(n) {
        if (n === 0) return 1
        return n * factorial(n-1)
    }
    