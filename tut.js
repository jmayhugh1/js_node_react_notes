export default function DoSomething(){

}
//define a functino with let, const, or var

export const doSomething = () => {
    //do something

}
//in react you define components with a function
const MyComponent = () => {
    //do something
    return <div></div>
}
//anonymouse functions
//normallt you would do this in regular js
<button onClick={function() {console.log("clicked")}}>Click Me</button>;
//in react you can do this
<button onClick={() => console.log("clicked")}>Click Me</button>;
//anonymous functions are useful when you want to pass a function as a prop

//working with conditionals with ternary operators
//in regular js you would do this
let age = 10;
let name = "Pedro"
if (age > 10){
    name = "Pedro";
}
else{
    name = "Josh";
}
//in react you can do this
let name2 = age > 10 && "Pedro" 
let name3 = age > 10 ? "Pedro" : "Josh";
