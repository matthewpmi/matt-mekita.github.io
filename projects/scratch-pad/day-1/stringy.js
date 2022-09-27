// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    // return input string length
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    // create variable to save lower case string
    var lowercase = string.toLowerCase();
    // return string converted to lowercase
    return lowercase;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // create variable to save upper case string
    var uppercase = string.toUpperCase();
    // return string converted to uppercase
    return uppercase;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    // create variable to store string with spaces converted to dashes
    var dashes = string.replaceAll(' ', '-')
    //create variable to store dashes converted to lowercase
    var lowerDashes = dashes.toLowerCase();
    // return lowercased and dash cased string
    return lowerDashes;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) { // must be case insensitive
    // YOUR CODE BELOW HERE //

    // convert args to lowercase and store in variable
    var lowerString = string.toLowerCase();
    var lowerChar = char.toLowerCase();
    // determine if first character of lowerString === lowerChar
    if (lowerString[0] === lowerChar) {
        // return true
        return true;
    }
    // else determine if first character of string != char
    else {
        //return false
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) { // must be case insensitive
    // YOUR CODE BELOW HERE //

    // convert args to lowercase and store in variable
    var lowerString = string.toLowerCase();
    var lowerChar = char.toLowerCase();
    // determine if last character of lowerString === lowerChar
    if (lowerString[string.length - 1] === lowerChar) {
        // return true
        return true;
    }
    // else determine if last character of string != char
    else {
        //return false
        return false;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // return stringOne concatenated with stringTwo
    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // create variable to store all strings in array args joined
    var joined = args.join('');
    // return all strings in array args joined
    return joined;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // determine if stringOne is longer than stringTwo
    if (stringOne.length > stringTwo.length) {
        // return stringOne
        return stringOne;
    }
    // else determine if stringTwo is longer than stringOne
    else if (stringTwo.length > stringOne.length) {
        //return stringTow
        return stringTwo;
    }
    // else determine if strings are equal length 
    else {
        // return equal
        return 'equal';
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // determine if stringOne is higher in alphabetical order than stringTwo
    if (stringOne < stringTwo) {
        // return 1
        return 1;
    }
    // else determine if stringTwo is higher in alphabetical order than stringOne
    else if (stringTwo < stringOne) {
        // return -1
        return -1;
    }
    // else determine the two strings are equal in alphabetical order
    else {
        // return 0
        return 0;
    }
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // determine if stringOne is lower in alphabetical order than stringTwo
    if (stringOne > stringTwo) {
        // return 1
        return 1;
    }
    // else determine if stringTwo is lower in alphabetical order than stringOne
    else if (stringTwo > stringOne) {
        // return -1
        return -1;
    }
    // else determine the two strings are equal in alphabetical order
    else {
        // return 0
        return 0;
    }


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
