/*1. What is the purpose of template literals?
    Use ${} to insert variables or expressions into a string.
 */
const strn = 'aniket'
console.log(`hello Dear ${strn}. How are You?`);

/*2.Explain the concept of default parameters in ES6.
    defult parameter in es6+ allows you assign defualt values to function parameter
    no value or undefined is passed
*/

/*3.what is mean by ES6+ 
    ES6+ (also called ECMAScript 2015 and beyond) refers to modern versions of JavaScript
    which introduced new features to make the language more powerful and easier to use.
 */

/*4.What are rest and spread operators in JavaScript?
    rest = collects the elements into single collection # destructing of objects
    spread operator is use for combining the two objects
 */

const restOne = {
    restName : "aniket",
    restMail : "aniket@123",
    restLogin: "yes"
}

const {restName ,...rest}= restOne // use rest operator for collecting elements into single one
console.log(restName);
console.log(rest);


/*5.What are JavaScript modules, and how are they imported/exported?
    JavaScript modules allow you to organize code into separate files for better reusability and maintainability. 
    You can export parts of a module and import them in other files.
    imported by using import aND EXported by using export

    ex ; import home from 'Home.js'
 */

/*6.
 */