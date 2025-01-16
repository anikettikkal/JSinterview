/* 1.What is JavaScript, and how is it different from Java?
    javascript is a interpreted language that can be use to make the web pages dynamic and interactive and running in browsers
    while java can be run in a JVM and it is not purely interpreted it can follows step of interpretation
    first java code can convert into byte code by javac and then this byte code intereprete by JVM
*/

/* 2.Explain the difference between `var`, `let`, and `const`.
    there are three main variables use in js i.e 'var', 'let', 'const'
    but in modern js we can use mostly let and const , instead of var bcoz due to scope issues
*/
const id= 1234
const email="tikkalaniket03@gmAIL.com"
const password = "aniket03"
console.table([id,email,password]);

/* 3.What are the different data types in JavaScript?
    there are two main data types according to method of accesing data from memory i.e primitive and non primitive
    primitive(call by value)= string, number, boolean, null, symbol, undefined
    non primitive(call by reference)= array, objects and functions
 */
const number=9870;
const scroll= null;
const name = "aniket";
let userEmail;
console.log(typeof userEmail);

const array = ["aniket","avi","mukesh","chandrabhan"]
const obj1={
    name: 'aniket',
    isLogedIn: 'yes'
}
const aniket = function(one,two){
    three= one+two
    console.log(three);
    
}
aniket(2,3)
console.log(obj1);

/* 4.How does JavaScript handle type coercion?
    coercion is one type of error that can occurs when we compare two values this can be solve by using strick cheack i.e "==="
 */
const a=34
const b='45'
console.log(a===b);

/* 5.What is the difference between `undefined` and `null`?
    null and undefined both are primitive values
    both are  indicate the absence of a value or object.
    null can be set by the programmer and undefined is a default state
 */


/* 6.Explain the concept of hoisting in JavaScript
    variable and function can be declared on top and then value declared
    ex: console.log(x)
        const a=5
 */

/* 7.What are closures, and how are they used?
 */

/* 8. What is the difference between `==` and `===`?
 */

/* 9.How does the `this` keyword work in JavaScript?
    global execution context
    function execution context
    eval execution context
 */
console.log(this);
const thisObj={
    anyName:"aniket",
    anyMail:"aniket@gmail.com",
    anyFunc: function(){
        console.log(this.anyName,"WEL-COME");
        
    }
}
thisObj.anyFunc()

/* 10. What are arrow functions, and how are they different from regular functions?

 */
const add = (a,b)=>a+b;
console.log(add(2,3));
