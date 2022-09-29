// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function that takes a parameter
    return function(num){
        // test if num is greater than base; return
        return num > base;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function that takes a parameter
    return function(num){
        // test if num is less than base; return
        return num < base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * CASE INSENSITIVE!
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    
    // convert starsWith character to lower case
    var lowerStart = startsWith.toLowerCase();
    // return a function that takes a parameter string
    return function(string){
        // convert string to lowercase
        var lowerString = string.toLowerCase();
        // test if lowerString first character is equal to lowerStart; return
        return lowerString[0] === lowerStart;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * CASE INSENSITIVE!
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    
    // convert starsWith character to lower case
    var lowerEnd = endsWith.toLowerCase();
    // return a function that takes a parameter string
    return function(string){
        // convert string to lowercase
        var lowerString = string.toLowerCase();
        // test if lowerString last character is equal to lowerEnd; return
        return lowerString[string.length - 1] === lowerEnd;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) { // modify is a function
    // YOUR CODE BELOW HERE //
    // create variable to store modified array
    var modArray = [];
    // iterate over strings array
    for (var i = 0; i < strings.length; i++){
        // pass strings elements through modify funciton
        // push modified strings to modArray
        modArray.push(modify(strings[i]));
    }
    return modArray;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) { // test is a function
    // YOUR CODE BELOW HERE //
    // create counting variable starting at zero to accumulate all of the true outcomes
    var count = 0;
    // iterate over strings array
    for (var i = 0; i < strings.length; i++){
        // check if each element of strings arrary run through test function is true
        if (test(strings[i])) {
            // increment count for each true return
            count++;
        }
    }
    // check if count is equal to strings array length; return
    return count === strings.length;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
