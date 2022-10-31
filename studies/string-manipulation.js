/**
 * STRING MANIPULATION:
 * 
 * 0: Strings are a zero-indexed datatype defined by characters wrapped in quotes
 * 
 * 1: Strings can be manipulated in a number of ways however because strings are immutable the methods called on them return a 'copy' of the given string changed
 * 
 * 2: Strings can be concatenated with a + symbol OR the concat method can be called on the string with dot notation and the desired string to be concatenated inside the method's parenthesis
 * 
 * 3: Other string methods (there are many) are utilized with dot notation attached to the string name
 * 
 */

// 1 Zero-indexed string
//          0123
let firstName = 'matt' // the string name's value of 'matt' is zero indexed and the number attached to each character is shown above the string

// 2 Concatenation
let age = 31;
console.log(firstName + ' is ' + age + '.') // 'matt is 31.' will be logged as we have concatenated the strings given with +

// 3 String methods
// strings cannot be mutated but when methods are called on them we can get copies of our altered strings or even turn strings into arrays
// examples of string methods
// split
let nameArray = firstName.split('') // nameArray = ['m', 'a', 't', 't'] split will take the given string an 'split' each character into an element in an array. Changing the value in the parenthesis will change where the string is split
// length
console.log(firstName.length) // logs 4 to the console as that is the length of the string
// bracket notation, toUpperCase, slice
let capitalizedName = firstName[0].toUpperCase() + firstName.slice(1); // here we are capitalizing the 0 index of firstName and concatenating with firstName minus the first letter
console.log(capitalizedName); // logs 'Matt'

