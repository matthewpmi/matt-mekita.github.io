// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// const { push } = require("opspark/controller/publish");

// declare variable _ and assign it to an empty object
var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    // determine if value is array and return array
    if (Array.isArray(value)){
        return 'array';
    }
    // else determine if value is null and return null
    else if (value === null){
        return 'null';
    }
    // else return typeof value
    else {
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, num){
    // determine if array is an array 
    if (!Array.isArray(array)){
        return [];
    }
    // else determine if num is a number and return 1st index of array if not
     else if (!num){
        return array[0];
    }
    // determine if num is greater than 0 and return array from [0] to [num]
    else {
         if (num > 0){
            return array.slice(0, num);
         }
         // else determine if numb is less than 0 and return array from [-1] to [num]
         else if (num < 0){
            return [];
         }
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
// create function _.last that takes parameters array, num
_.last = function(array, num){
    // determine if array is an array 
    if (!Array.isArray(array)){
        return [];
    }
    // else determine if num is a number and return 1st index of array if not
     else if (!num){
        return array[array.length - 1];
    }
    else {
        // else determine if num is greater than array length and return array
        if (num > array.length){
            return array;
        }
        // determine if num is greater than 0 and return array from [num] to [-1]
         else if (num > 0){
            return array.slice(-num);
         }
         // else determine if num is less than 0 and return array from [-1] to [num]
         else if (num < 0){
            return [];
         }
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// create function _.indexOf that takes parameters array, value
_.indexOf = function(array, value){
    // iterate through given array
    for (var i = 0; i < array.length; i++){
        // determine if value is in array and return it's index
        if (array[i] === value){
            return i;
        }
    }
    // return -1 if for loop returns nothing
    return -1;
}
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// create function _.contains that takes parameters array, value
_.contains = function(array, value){
    // iterate through given array
    for (var i = 0; i < array.length; i++){
        // determine if value is in array and return true
        if (array[i] === value){
            return true;
        }
    }
    // return false if for loop returns nothing
    return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
// create _.each function with paramters collection, func
_.each = function(collection, func){
    // determine if collection is array
    if (Array.isArray(collection)){
        // iterate through array
        for (var i = 0; i < collection.length; i++){
            // call func with parameters of current element, current index, array
            func(collection[i], i, collection);
        }
    }
    // else it's an object
    else {
        // iterate through object
        for (var key in collection){
            // call func with parameters of property's value, property's key, object
            func(collection[key], key, collection)
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
// create function _.unique with parameter array
_.unique = function(array){
    // create new variable to hold new array
    var myArray = [];
    // iterate through aray
    for (var i = 0; i < array.length; i++){
        // use _.index of to determine if current array element is in myArray and push current element if it's not
        if (_.indexOf(myArray, array[i]) === -1) {
            myArray.push(array[i]);
        }
    }
    // return new array with no dupes
    return myArray;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
// create function _.filter with parameter array, function
_.filter = function(array, func){
    // create variable to hold new array
    var myArray = [];
    // iterate over array
    for (var i = 0; i < array.length; i++){
        // determine if func call returns true and push to new array
        // call func with paramters current array element, it's index, array
        if (func(array[i], i, array)){
            myArray.push(array[i])
        };
    }
    // return new array after running through func
    return myArray;
}
// ** ask alex about using _.each function in implementation

// _.filter = function(array, func){
//     if (_.each(array, func(e))) {
//         return
//     }
        
// }


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
// create function _.reject with parameters array, function
_.reject = function(array, func){
    // create variable to hold new array
    var myArray = [];
    // iterate through array
    for (var i = 0; i < array.length; i++){
        // determine if func returns false and push to myArray
        if (!func(array[i], i, array)){
            myArray.push(array[i])
        }
    }
    // return new array
    return myArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
// create function _.partition with paramters array, function
_.partition = function(array, func){
    // create variable to hold new array with 2 sub-arrays
    var myArray = [[],[]];
    // iterate through given array
    for (var i = 0; i < array.length; i++){
        // determine if func returns truthy and push to first sub-array
        if (func(array[i], i, array)) {
            myArray[0].push(array[i])
        }
        // else if falsy push to second sub-array
        else {
            myArray[1].push(array[i])
        }
    }
    // return new array with partitions
    return myArray;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
// create function _.map with parameters collection, function
_.map = function(collection, func){
    // create variable to hold func calls in array
    var myArray = [];
    // determine if collection is array
    if (Array.isArray(collection)){
        // iterate through array and call function for each element and push result to myArray
        for (var i = 0; i < collection.length; i++){
            myArray.push(func(collection[i], i, collection))            
        }
    }
    // else if object
    else {
        // iterate through object and call function for each property and push result to myArray
        for (var key in collection) {
            myArray.push(func(collection[key], key, collection))
        }
    }
    // return new array with func calls
    return myArray;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// _.pluck = function(array, prop){
//     // create variable to hold prop values in array
//     var myArray = [];
//     // iterate over array of objects
//     for (var i = 0; i < array.length; i++){
//         // run array element through map function and push result to myArray
//         myArray.push(_.map(array[i], function(e, k) {
//             // determine if given prop is equal to current iteration prop
//             if (prop === k){
//                 // return current iteration prop value
//                 return e;
//             }
//         })[0])       
//     }
//     // return myArray
//     return myArray;
// }

// create function _.pluck with parameters array of objects, property
_.pluck = function(array, property) {
    // return map function with function returning an array with given property at each array index
    return _.map(array, function(e){
        return e[property];
    })
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    // determine if func is not provided
    if (func === undefined){
        // determine if collection is an aray
        if (Array.isArray(collection)){
            // itereate through given array
            for (let i = 0; i < collection.length; i++){
                // if current collection element is falsy and return false
                if (!collection[i]){
                    return false
                }
            }
        }  
        // else if object
        else {
            // iterate through object
            for (var key in collection){
                // determine if current collection value is falsy and return false
                if (!collection[key]){
                    return false;
                }
            }
        }
    }
    // determine if func is truthy
    if (func){
        // determine if it's an array
        if (Array.isArray(collection)){ 
            // iterate through array
            for (let i = 0; i < collection.length; i++){
                // determine if result of func is false and return false
                if (func(collection[i], i, collection) === false){
                    return false;
                }
            }
        }
        // else if object
        else {
            // iterate through object
            for (var key in collection){
                // determine if result of func is false and return false
                if (func(collection[key], key, collection) === false){
                    return false;
                }
            }
        }
    }
    // if no if statement returns, return true
    return true;
}



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
// create function _.some with paramters collection, func
_.some = function(collection, func){
    // determine if collection is array
    if (Array.isArray(collection)){
        // iterate through array
        for (var i = 0; i < collection.length; i++){
            // determine if func is not provided
            if (func === undefined) {
                // determine if any element of array is truthy and return true
                if (collection[i]){
                    return true;
                }
            }
            // else run func on each element in collection and return true if any results are truthy
            else {
                if (func(collection[i], i, collection)){
                    return true;
                }
            }
        }
    }
    // else if object
    else {
        // iterate throuh object
        for (var key in collection){
            // determine if func is not provided
            if (func === undefined){
                // determine if any property of object is truthy and return true
                if (collection[key]){
                    return true;
                }
            }
            // else run func on each property in collection and return true if any results are truthy
            else {
                if (func(collection[key], key, collection)){
                    return true;
                }
            }
        }
    }
    // return false if nothing is returned above
    return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
// var nums = [1, 2, 3, 4];
// var sum = nums.reduce(function(acc, current, index, array){
//     acc += current; // acc = 0 + 1
//     return acc; // 1
// },0);
// // invoke reduce
//     // seed or no seed? -> seed = 0
//     // result = 0

//     // for loop
//         // 0
//             // result = func(result, /crrent item/, /current index/, /array/)
// //                               0       1               0          [1, 2, 3, 4]
//     // return result

_.reduce = function(array, func, seed){
    // create variable result
    var result;
    // determine if seed is not given
    if (seed === undefined){
        // assign result to zero index of array
        result = array[0];
        // ieterate through array starting at 1 index
        for(var i = 1; i < array.length; i++){
            // update result to func return
            result = func(result, array[i], i, array);
        }
    }
    // else if seed is given
    else {
        // set result equal to seed
        result = seed;
        // iterate through array
        for (var i = 0; i < array.length; i++){
            // update result to func return
            result = func(result, array[i], i, array);
        }
    }
    // return result
    return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// creat function _.extend with parameters object, object, indefinite objects
_.extend = function(object1, object2, ...object3){
    // use Object.assign to assign object2 and object3 to object1
    Object.assign(object1, object2, ...object3);
    // return object1
    return object1;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
