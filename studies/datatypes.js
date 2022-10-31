/**
 * DATATYPES:
 * 
 * 0: Primitive datatypes: null, undefined, boolean, number, string. These are low level datatypes and are immutable.
 * 
 * 1. Complex datatypes: collections such as objects and arrays. These are mutable.
 * 
 */

// 1 Null

typeof null; // returns 'object'

// null is inhabited by exactly one value: null.
// indicates the absence of an object

// 2 Undefined

typeof undefined; // returns 'undefined'

// undefined is inhabitited by exactly one value: undefined.
// indicates the absence of a value

// 3 Boolean

typeof true; // returns 'boolean'

// boolean is inhabitited by true and false
// usually used with conditional operators like if/else statements

// 4 Number

typeof 4; // returns 'number'

// inhabited by numbers, including floats

// 5 String

typeof 'hello'; // returns 'string

// strings are zero indexed datatypes defined by wrapping characters in quotes
// strings are immutable and any alterations made to them will produce a 'copy'

// 6 Objects
let myOb = { name: 'Matt'}
typeof myOb; // returns object

// objects are complex datatypes that are a collection of properties wrapped in curly braces
// properties are represented by key-value pairs
// property values can be any datatype

// 7 Arrays
let myArr = [1, 2, 3, 4]
typeof myArr; // returns object

// arrays are numbered lists that are zero-indexed
// array values can be accesed by using brackets with the values index

// more on arrays and objects..

// ARRAYS AND OBJECTS
/*
Key differences:
1. Arrays are ordered (zero index), Objects are not
*/
//             0  1  2  3
var myArray = [4, 5, 6, 7];

// 2. Objects have key/value pairs, Arrays do not
var myObj = {
// key   value
  name: 'Matt',
  location: 'Earth',
  age: 'Young'
};

// 3. Objects are best used to store 'things' that have properties in them, Arrays are best used to store lists (can be lists of 'things')

/*
4. Adding and removing things to arrays and objects
Arrays:
*/
// adding
// push method, used to add to end of array
myArray.push(8);
// unshift method, used to add to beginning of array
myArray.unshift(3);
// bracket notation, used to add to a named location of array
myArray[myArray.length] = 9;
console.log(myArray)

// removing
// pop method
myArray.pop();
// shift method
myArray.shift();
// splice method
myArray.splice(0, 2)
console.log(myArray);

// Objects:
// delete
delete myObj.location;
console.log(myObj)

/*
5. Accessing Arrays and Objects
*/
// to access both object and array elements/properties we can use bracket notation
console.log(myArray[1]);
console.log(myObj['name']);
// objects can also use dot notation
console.log(myObj.age);
// to iterate through every element/property of arrays/objects we use for loops
for(var i = 0; i < myArray.length; i++){
  console.log(myArray[i])
};
// for in loop
for(var key in myObj){
  console.log(myObj[key])
};
// Other helpful methods
console.log(Array.isArray(myArray));
console.log(myObj.hasOwnProperty('name'));