// Solve all of the following prompts using recursion.

// const { reverseArray } = require("../../eloquent-javascript/chapter-04/exercises");

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
// create function factorial with paramters n, fact defaulting to 1
var factorial = function(n, fact=1) {
  // base case: determine if n is negative and return null
  if (n < 0){
    return null;
  }
  // base case: determine if n is zero and return fact
  if (n === 0){
    return fact;
  }
  // recursion: fact = fact * n
  fact *= n;
  // return function with parameters n - 1, fact
  return factorial(n - 1, fact);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
// create function sum with paramters array, total defaulting to 0
var sum = function(array, total=0) {
  // base case: determine if array length is 0 and return total
  if(array.length === 0){
    return total;
  }
  // recursion: total = total + first element of array
  total += array[0]
  // return function with paramters array with the first element removed, total
  return sum(array.slice(1), total)
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
// create function isEven with paramter n
var isEven = function(n) {
  // base case: determine if n is 0 and return true
  if(n === 0){
    return true;
    // base case: else determine if n is 1 and return false
  } else if (n === 1){
    return false;
  }
  // recursion: determine if n is less than 0
  if(n < 0){
    // return function with paramter n + 2
    return isEven(n + 2)
    // determine if n is greater than 0 and return funciton with parameter n - 2
  } else if (n > 0){
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
// create funciton sumBelow with parameters n, sum defaulting to 0
var sumBelow = function(n, sum=0) {
  // base case: determine if n is 0 and return sum
  if(n === 0){
    return sum;
  }
  // recursion: determine if n is greater than
  if (n > 0){
    // return sum equal to function with parameters n - 1, sum + n - 1
    return sum = sumBelow(n - 1, sum) + n - 1
  } else if (n < 0) {
    // if n is negative return sum equal to function with parameters n + 1, sum n + 1
    return sum = sumBelow(n + 1, sum) + n + 1
  }
};

// var sumBelow = function(n, sum=0) {
//   if(n === 0){
//     return sum;
//   }
//   if (n > 0){
//     sum += n - 1;
//     return sumBelow(n - 1);
//   } else if (n < 0) {
//     sum += n - 1;
//     return sumBelow(n - 1);
//   }
// };
// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
// create function range with parameters x, y, array defaulting to []
var range = function(x, y, array=[]) {
  // determine if x < y and add 1 to x
  if (x < y){
    x += 1
  }
  // determine if x > y and subtract 1 from x
  if (x > y){
    x -= 1
  }
  // base case: if x equals y return array
  if (x === y){
    return array;
  }
  // recursion: push x to array
  array.push(x)
  // return function with parameters x, y, array
  return range(x, y, array)
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
// create function exponent with parameters base, exp
var exponent = function(base, exp) {
  // base case: determine if exp is 0 and return 1
  if(exp === 0){
    return 1;
  }
  // recursion: determine if exp is less than 0 
  if(exp < 0){
    // return function with parameters bas, exp + 1  / base
    return exponent(base, exp + 1) / base;
  }
  // else if exp is 1 return base
  else if(exp === 1){
    return base;
  }
  // return funciton with parameters base, exp - 1    * base
  return exponent(base, exp - 1) * base;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
// create function powerOfTwo with paramter n
var powerOfTwo = function(n) {
  // base case: if n is 1 return true
  if(n === 1){
    return true;
  }
  // base case: if n divided by zero has a remainder return false
  if(n % 2 !== 0){
    return false;
  }
  // base case: if n is 0 return false
  if(n === 0){
    return false;
  }
  // recursion: return function with parameter n / 2
  return powerOfTwo(n / 2)
};

// 9. Write a function that accepts a string a reverses it.
// create function reverse that takes parameter string, output defaulting to an empty string
var reverse = function(string, output='') {
  // base case: determine if string length is 0 and return output
  if(string.length === 0){
    return output;
  }
  // recursion: update output to output + last character of string
  output += string[string.length - 1]
  // return function with parameter string without the last letter, output
  return reverse(string.slice(0, -1), output)
};

// 10. Write a function that determines if a string is a palindrome.
// create function palindrome with paramter string
var palindrome = function(string) {
  // remove spaces from string
  string = string.replace(/\s/g, '');
  // base case: determine if string length equals 0 or 1 and return true
  if(string.length === 0 || string.length === 1){
    return true;
  }
  // recursion: determine if first character of string is equal to last character of string
  if(string[0].toLowerCase() === string[string.length - 1].toLowerCase()){
    // return function with parameter string withouth first and last characters
    return palindrome(string.slice(1, -1))
  } else{
    // else if first and last characters aren't equal return false
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
// create function multiply with parameters x, y, z defaulting to 0
var multiply = function(x, y, z=0) {
  if(y === 0 || x === 0){
    return z;
  }
  if(y < 0){
    z -= x
    return multiply(x, y + 1, z)
  }
  z += x
  return multiply(x, y - 1, z)
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
// create function compareStr with parameters str1, str2
var compareStr = function(str1, str2) {
  // base case: determine if str1 and str2 length is 0 and return true
  if(str1.length === 0 && str2.length === 0){
    return true;
  }
  // recursion: determine if first character of str1 and str2 are the same
  if(str1[0] === str2[0]){
    // return function with parameters str1 without the first characert, str2 without the first character
    return compareStr(str1.slice(1), str2.slice(1))
  } 
  // return false if if statement doesn't hit
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
// create function createArray with parameters str, array defaulting to []
var createArray = function(str, array=[]){
  // base case: determine if str length is 0 and return array
  if (str.length === 0){
    return array;
  }
  // recursion: push to array first character of string
  array.push(str[0])
  // return function with parameters str without the first letter, array
  return createArray(str.slice(1), array)
};

// 17. Reverse the order of an array
// create function reverseArr with parameters array, output defaulting to []
var reverseArr = function (array, output=[]) {
  // base case: determine if array length is 0 and return output
  if(array.length === 0){
    return output;
  }
  // recursion: push to output array the given array's last character
  output.push(array[array.length - 1])
  // return function with parameters array without the last character and output
  return reverseArr(array.slice(0, -1), output)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
// create function buildList with parameters value, length, array defaulting to []
var buildList = function(value, length, array=[]) {
  // base case: determine if length is 0 and return array
  if (length === 0){
    return array;
  }
  // recursion: push to array value
  array.push(value)
  // return function with value, length-1, array
  return buildList(value, length - 1, array)
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
// create function countOccurence with parameters array, value, count defaulting to 0
var countOccurrence = function(array, value, count=0) {
  // base case: determine if array length is 0 and return count
  if(array.length === 0){
    return count;
  }
  // recursion: determine if first element of array is equal to given value and add 1 to count
  if(array[0] === value){
    count += 1;
  }
  // return function with parameters array withouth the first element, value, count
  return countOccurrence(array.slice(1), value, count)
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
// create function with parameters array, callback, output defaulting to []
var rMap = function(array, callback, output=[]) {
  // base case: determine if array length is 0 and return output
  if(array.length === 0){
    return output;
  }
  // recursion: push to output result of callback with parameter first element of array
  output.push(callback(array[0]));
  // return function with parameters array without the first element, callback, output
  return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
// create function nthFibo with parameters n, fib defualting to [0,1]
var nthFibo = function(n, fib=[0, 1]){
  // base case: determine if n is less than 0 and return null
  if (n < 0){
    return null;
  }
  // base case: determine if n is less than 2 and return n
  if (n < 2){
    return n;
  }
  // base case: determine if fib length is n + 1 and return nth element of fib
  if (fib.length === n + 1){
    return fib[n];
  }
  // recursion: push to fib the last + 2nd to last element of fib
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  // return function with parameters n and fib
  return nthFibo(n, fib);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
// create function capitalizeWords with parameters input, output defaulting to []
var capitalizeWords = function(input, output=[]) {
  // base case: determine if input length is 0 and return output
  if (input.length === 0){
    return output;
  }
  // recursion: push to output the first element of input capitalized
  output.push(input[0].toUpperCase())
  // return function with parameters input without the first element, output
  return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
// create function capitalizeFirst with parameters array, output defaulting to []
var capitalizeFirst = function(array, output=[]) {
  // base case: determine if array length is 0 and return output
  if (array.length === 0){
    return output;
  }
  // recursion: push to output the first element of array capitalized concatenated to the rest of the element's characters
  output.push(array[0].slice(0, 1).toUpperCase() + array[0].slice(1))
  // return function with parameters array without the first element, output
  return capitalizeFirst(array.slice(1), output)
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
// create function letterTally with parameters str, obj defaulting to {}
var letterTally = function(str, obj={}) {
  // base case: determine if str length is 0 and return obj
  if (str.length === 0){
    return obj;
  }
  // recursion: set obj property str first element to 1 or add 1 if already 1
  obj[str[0]] = obj[str[0]] + 1 || 1;
  // return function with str without first character, obj
  return letterTally(str.slice(1), obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
// create function compress with parameters list, output defaulting to []
var compress = function(list, output=[]) {
  // base case: determine if list length is 0 and return output
  if(list.length === 0){
    return output;
  }
  // recursion: determine if first element of list is not equal to last element of output
  if(list[0] !== output[output.length - 1]){
    // push to output first element of list
    output.push(list[0])
  }
  // return function with parameters list without the first element, output
  return compress(list.slice(1), output)
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
// create function minimizeZeroes with parameters array, output defaulting to []
var minimizeZeroes = function(array, output=[]) {
  // base case: determine if array length is 0 and return output
  if (array.length === 0){
    return output;
  }
  // recursion: determine is first array element is 0 AND first array element doesn't equal last output element
  if (array[0] === 0 && array[0] !== output[output.length - 1]){
    // push to output first element of array
    output.push(array[0]);
    // else determine if array's first element doesn't equal 0
  } else if (array[0] !== 0){
    // push to output first elment of array
    output.push(array[0]);
  }
  // return function with parameters array without the first element and output
  return minimizeZeroes(array.slice(1), output)
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
// create funtion alternateSign with parameters array, output defualting to []
var alternateSign = function(array, output=[]) {
  // base case: determine is array length is 0 and return output
  if(array.length === 0){
    return output;
  }
  // recursion: determine if output length is 0
  if(output.length === 0){
    // determine if first element of array is positive and push it to output
    if(array[0] > 0){
      output.push(array[0])
    }
    // determine if first element of array is negative and subtract itself mulitplied by 2 to make if positive and push to output
    if(array[0] < 0){
      output.push(array[0] - array[0] * 2)
    }
    // else determine if output length is odd AND array element is positive
  } else if (output.length % 2 !== 0 && array[0] > 0){
    // push to output negative version of array's first element
    output.push(array[0] - array[0] * 2)
    // else determine if output length is odd AND array element is negative
  } else if (output.length % 2 !== 0 && array[0] < 0){
    // push to output array's first element
    output.push(array[0])
    // else determine if output length is even AND array's first element is negative
  } else if (output.length % 2 === 0 && array[0] < 0){
    // push to output positive version of array's first element
    output.push(array[0] - array[0] * 2)
    // else determine if output length is even AND array's first element is positive
  } else if (output.length % 2 === 0 && array[0] > 0){
    // push to output array's first element
    output.push(array[0])
  }
  // return function with parameters arrary without first element, output
  return alternateSign(array.slice(1), output)
  };

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
// create function numToText with parameters str, newStr defaulting to ''
var numToText = function(str, newStr='') {
  // base case: determine if string length is 0 and return newStr
  if(str.length === 0){
    return newStr;
  }
  // recursion: determine if first element of array is a number 1-9 and concatenate the word version of that number to newStr
  if(str[0] === '1') {
    newStr += 'one';
  }
  else if(str[0] === '2') {
    newStr += 'two';
  }
  else if(str[0] === '3') {
    newStr += 'three';
  }
  else if(str[0] === '4') {
    newStr += 'four';
  }
  else if(str[0] === '5') {
    newStr += 'five';
  }
  else if(str[0] === '6') {
    newStr += 'six';
  }
  else if(str[0] === '7') {
    newStr += 'seven';
  }
  else if(str[0] === '8') {
    newStr += 'eight';
  }
  else if(str[0] === '9') {
    newStr += 'nine';
  }
  // else if not number concatenate to newStr
  else {
    newStr += str[0];
  }
  // return function numToText with parameters str withouth first element, newStr
  return numToText(str.slice(1), newStr);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
