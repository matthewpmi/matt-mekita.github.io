// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    // iterate through numbers 1-100
    for (var i = 1; i <= 100; i++) {
        // determine if number is not divisible by 3 or 5
        if (i % 3 !== 0 && i % 5 !== 0) {
            // log to console
            console.log(i)
        }
        // else determine if number is divisible by 3 and 5
        else if (i % 3 === 0 && i % 5 === 0) {
            // log FizzBuzz to console
            console.log('FizzBuzz');
        }
        // else determine if number is divisible by only 3
        else if (i % 3 === 0) {
            // log Fizz to console
            console.log('Fizz');
        }
        // determine if number is divisible by only 5
        else if (i % 5 === 0) {
            // log Buzz to console
            console.log('Buzz');
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}