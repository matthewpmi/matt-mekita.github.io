/**
 * VARIABLES:
 * 
 * 0: Variables are named containers for data in Javascript. The containers 'point' to  values such as numbers, strings, booleans, arrays, objects, or other data types. Variables can be changed (re-assigned) throughout the program (sans const).
 * 
 * 1: To create variables we use a keyword (var, let, const) and an assignemt operator followed by the value we want the variable to represent.
 * 
 * 2: Variable assignment is designated into 2 phases -> declaration and initialization (or assignment)
 * 
 * 3: Hoisting variables are hoisted to the top of the code but not initialized(assigned)
 * 
 */

// 1 Declaration
var age; // variable age is declared but not assinged a value

// 2 Initialization
age = 35; // variable age is now assigned a value
// OR
var size = 'medium'; // variable size is declared AND assigned to a value

// 3 Re-assignment
var animal = 'cat'; // variable animal is declared and assigned to the string cat
animal = 'dog'; // variable animal is re-assigned to string dog ** const cannot be re-assigned
var animal = 'seal'; // variable animal is now assigned to seal **this cannot be done with let**
