//arrasy
//let selectedColors = ['red', 'blue'];
//console.log(selectedColors);

//properties of objects
let person = "John";
console.log(person.length); // this is a property of the object person
console.log(person.toUpperCase());
person = {
    name: 'John',
    age: 30
}
console.log(person.name);
console.log(person.age);
fart = "caca";
console.log(fart.toUpperCase());

//mutable 
// object values can be modified the types of values that can be modified are called mutable
// numbers, strings, booleans, undefined, null, symbols are immutable
// it is impossible to change characters in a string
let name = 'John';
//name[0] = 'M'; // this will not work
console.log(name);
// if you want to change the name you have to reassign the variable
name = 'Mary';
//convert to a list of characters
name.split('');
console.log(name);
console.log(name);
// arrays are mutable
let selectedColors = ['red', 'blue', 'yellow', 'black'];
selectedColors[2] = 'green';
console.log(selectedColors);

//pointers

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);

for (let i = 0; i < selectedColors.length; i++) {
    console.log(selectedColors[i]);
}


// the Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
let objectA = { a: 1, b: 2, c: 3 };
let objectB = Object.assign({ c: 4, d: 5 }, objectA);
console.log(objectB);
// -> { c: 3, d: 5, a: 1, b: 2 }

let journal = [
     {events: ["work", "touched tree", "pizza", "running", "television"],squirrel: false},
    {events: ["work", "ice cream", "cauliflower","lasagna", "touched tree", "brushed teeth"], squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"], squirrel: true},
    ];


//string