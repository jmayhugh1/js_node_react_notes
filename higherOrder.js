// functions that operate on other functions either by takingthem as arguments or by returning them are called higher-order function
function greaterThan(n) {
    // this is a function that returns a function
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// -> true


//this is another way to do make a function
let lessthan = n => m => m < n;
console.log(lessthan(10)(9));
// -> true

function noisy(f) {
    // this is a function that takes a function as an argument
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1);
// -> calling with [3, 2, 1]
// -> called with [3, 2, 1] , returned 1

// iterate over a list
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(element => {
    // change the value of each element
    element = element + 1;
    
});

//if you esnt to acces each indivdial element you can use a for loop
console.log("running the foreach")
arr.forEach(function(element, index, array) {
    // change the value of each element
    array[index] = element + 1;
});
console.log(arr);

// map over a list
//map takes a function as an argument and applies it to each element in the list
let arr2 = arr.map(element => {
    // change the value of each element
    return element + 1;
});
console.log(arr2);