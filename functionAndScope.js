/*1.What is a higher-order function?
    A higher-order function is a function that can take other functions as arguments,
    return a function, or both. It allows for functional programming patterns.
 */

function higherOrder(callback){
    return callback(5);
}
function multipleTwo(num){
    return num*2
}
console.log(higherOrder(multipleTwo)); // output is 10

/*2.What is the difference between function declarations and function expressions?
    function declaration is a regular function syntax
    function expression means a function assigned to a variable
 */
function greet(){
    return 'hello'
}
console.log(greet());

const greetMsg= function(){
    return 'hello Good Morning'
}
console.log(greetMsg());

/*3.Explain the concept of "callback functions."
    callback function is also called as a higher order function in that function can passed arguments to another function and executed
    after completion of that function
 */

/*4.What is memoization in JavaScript?
 */

/*5.How does JavaScript handle asynchronous functions?
    JavaScript handles asynchronous functions using callbacks, promises, and async/await.
    asynchronous function allows non blocking execution. it runs independently as the execution flow of programe.

 */
// promises use for do an Async task = any operation in programe that can run background

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('do an async task');
        resolve()
    },2000)
})
// promise consume
promiseOne.then(function(){
    console.log('promise consumed');
    
})

/*6.What is the purpose of the `bind()`, `call()`, and `apply()` methods?
    dont know what are this methods
 */

/*7.What is currying in JavaScript?
    function is transformed into a series of functions that each take a single argument. 
    Each function returns another function that accepts the next argument,
 */

/*8.How does lexical scoping work in JavaScript?
    the scope of a variable is determined by its position not an by the flow of execution
 */
function outerFunction() {
    const outerVar = "I'm from the outer function";
  
    function innerFunction() {
      console.log(outerVar); // Can access outerVar due to lexical scoping
    }
  
    innerFunction();
  }
  
  outerFunction(); // Output: I'm from the outer function

/*9.What is the purpose of the `new` keyword in JavaScript?
  new keyword is use to creating a new instance of an object in js
 */

/*10.Can you explain IIFE (Immediately Invoked Function Expression)?
  function is define and executed immedietly after its creation
*/
(function(){
    console.log('execute immedietly');
    
})()

// ES6 = that means the features and syntax of js that can improves js language and make it more powerfull
// eg. modules , promises, classes , arrow function
  
  
  
  