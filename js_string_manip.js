let name = "AnthonyIsGay";
console.log(name);

console.log(name.split(''));

// Extracting parts of a string

let sub = name.substring(0, 7);
// -> Anthony
let sub2 = name.slice(0, 7);
// -> Anthony
let sub3 = name.substr(0, 7);
// -> Anthony

//replacing a specfied value in a string
name = name.replace('Anthony', 'Josh');
// -> JoshIsGay

// to replace with case insensitivity
name = name.replace(/anthony/i, 'Josh');
// -> JoshIsGay

// to replace all matches
name = name.replace(/anthony/g, 'Josh');
// -> JoshIsGay

// to replace all matches with case insensitivity
name = name.replace(/anthony/gi, 'Josh');
// -> JoshIsGay

//built in replace all
name.replaceAll('anthony', 'Josh');
// -> JoshIsGay

// make everything uppercase
name = name.toUpperCase();
// -> JOSHISGAY


// concatenating strings
let str1 = "Hello ";
let str2 = "world!";
let res = str1.concat(" ", str2);
// -> Hello world!


//remove whitespace from both sides of a string
name = name.trim();
// -> JoshIsGay

// string interpolation
//Unlike single quote and double quote strings, template strings can span multiple lines. Here's an example:

let text = `This is a multiline
string that
just works!`

let language = "JavaScript";
`I am learning ${language}`; //"I am learning JavaScript";

//convert a number to string is 
let num = 10;
console.log(num.toString());
// -> "10"

