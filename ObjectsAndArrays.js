/*1.How can you create objects in JavaScript?
    in curly braces we are creating a object{}
    by using new keyword we are creating a objects
 */
const anyObj = new Object()
anyObj.name= "aniket tikkal"
anyObj.mail= 'tikkalaniket03@gmail.com'
console.log(anyObj);

const another = {
    nametwo:"banti sheth",
    mailId:"bantisheth3@gmail.com"
}
console.log(another);
console.log(another['nametwo']);


/*2.What is the difference between shallow copy and deep copy in JavaScript?
    i dont understand meaning of this
 */
/*3.How do you iterate over an object’s properties?
 */
// by using keys and values pair also object.entries

// how to add symbol values in objects

const mySym = Symbol('key1') // how to add symbol values in object


const jsUser ={
    userName:"aniket tikkal",
    userMail:"aniket03@gmail.com",
    [mySym]: "mykey1",
    userId: 1234,
    fullName: {
        userFullName:{
            name: 'aniket ramesh tikkal',
        }
    }
    
}
Object.freeze(jsUser) // how to lock values in objects
jsUser.fullName.userFullName.name = "banti sheth tikkal" // how to change values
console.log(jsUser.fullName.userFullName); // how to access values
console.log(jsUser['userMail']);

jsUser.greeting = function(){
    console.log(`hello ${this.userName}, Good Morning!`); // adding function in objects
    
}
console.log(jsUser);

const mainUser = [
    {
        mainUserMail:"aniket@gmail.com",
        mainUserID: 2342
    }
]
console.log(mainUser[0].mainUserMail); // we can access only values we needed in array 


console.log(Object.keys(jsUser)); // access only keys from object
console.log(Object.values(jsUser)); // access only values from objects

console.log(Object.entries(jsUser)); // we can convert object into array format

/*4.How can you merge two objects in JavaScript?
    we can merged two objects by using spread operator (...)
    also by using Object.assign we can merged
 */
const objOne ={1:'a', 2:"b"}
const objTwo ={3:"c",4:"d"}

const objThree = Object.assign({},objOne,objTwo)
console.log(objThree);

const merged = {...objOne, ...objTwo}
console.log(merged);

/*5.What are JavaScript prototypes?
    prototypes means internal part og objects like functions and other keys values
 */

/*6.What is the difference between `Object.freeze()` and `Object.seal()`?
    object.freeze = Prevents adding , removing and modifying properties
    object.seal() = prevents adding and removing properties but we can modifying values
 */

/*7.What is destructuring in JavaScript?
    Destructuring in JavaScript is a syntax that allows you to extract values from arrays
    or properties from objects and assign them to variables.
*/

const course = {
    courseName :"C language",
    courseInstructor: "aniket"
}
const {courseName} = course
console.log(courseName);

/*8.How do you remove duplicates from an array?
    To remove duplicates from an array in JavaScript, you can use the Set object or filter() method.
 */

/*9.What are the different ways to iterate through an array?
    using for loop
    using forEach loop
    using map()
    using for - of 
    using while loop
 */

const arr =[1,2,3,4,5,6,7,8,9,10]
for(i=0;i<=arr.length;i++){
    console.log(arr[i]);   
}
arr.forEach(element => {
    console.log(element);
    
});
arr.map(item => {
    console.log(item);
    
})
for (const item of arr) {
    console.log(item);
    
}


const arrOne = [1, 2, 3];
let i = 0;
while (i < arrOne.length) {
    console.log(arrOne[i]);
    i++;
}