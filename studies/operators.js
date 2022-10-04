/**
 * OPERATORS:
 * 
 * 0: Operators are used in expressions to allow them to evaluate to a value.
 * 
 * 1: To assign variables to values we use assignemt operators. = is the default assignment operator but there are others such as +=, -=, *-. 
 * 
 * 2: Arithmetic operators are basically the same operators used in math: +, -, *, /, **. Others include % (remainder), ++ (increment, similar to +=), --.
 * 
 * 3: Comparison operators return a boolean value. Examples: >, <, <=, >=, == (equal), === (strictly equal), != (not equal), !== (strictly not equal).
 * 
 * 4: Logical operators are often used with comparison operators(or other boolean values). 
 *  Examples: || (logical OR, returns true if one or more expressions are true), && (logical AND, returns true if ALL expressions are true), ! (logical NOT, returns false if exression is true and true if expression is false).
 * 
 * 5: Unary operators are operators with only one operand (the value being operated on). Examples: delete (used to delte properties and/or keys from objects), typeof (returns the datatype of the operand), etc...
 * 
 * 6: Ternary (or conditional) operators are the only operators that take 3 operands. They use a ? after the condition and a : between to the 2 possible values returning either depending if the condition is true or false.
 * 
 */

// 1 Assignment operators
var age = 92; // variable age is declared and ASSIGNED to 92 using the =
age += 4; // 96 ->variable age is being re-assigned to 96 using +=. This is the same as age = 92 + 4.

// 2 Arithmetic operators
var year = 1992 + 3; // 1995 -> variable year is being assigned to the expression 1992 + 3. using arithmetic operators we can assign variables to expressions that evaluate to values
year--; // 1994 -> variable year is being decremented by 1 using the -- operator.

// 3 Comparison operators
var passed = 90 > 60; // true -> variable passed will evaluate to true as 90 is greater than 60 (it would return nothing if they were equal)

// 4 Logical operators
if (7 > 5 || 4 > 6) { 
    return 'bird'
};                       // string bird will be returned by this conditional statement as one of the 2 operands evaluates to true || (logical OR)

if (7 > 5 && 4 > 6) { 
    return 'bird'
};                       // this will not run as BOTH of the operands do not evalutate to true when using && (logical AND)

if (!(7 > 5)){
    return 'bird'
};                       // this will not run as the true value of the operand becomes false when using the ! (logical NOT)

// 5 Unary operators
var team = {
    name: 'jets',
    city: 'new york',
    league: 'nfl'
}
delete team.name; // the name property is deleted from the team object using the unary operator 'delete'

typeof team; // object -> returns the datatype of the given variable/value after 'typeof'

// Ternary (or conditional) operators
var oldEnough = age >= 21 ? 'yes drink' : 'no leave'; // similar to an if/else statement, if age >= 21 evaulates to true the first value (before the :) will be returned, else if the conditon evaluates to false the second value will be returned



