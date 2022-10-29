////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function range with parameters start, end, step defaulted to 1
function range(start, end, step=1) {
  // create variable to store array result
  var myArray = [];
  // return empty variable if start and end are the same
  if (start === end){
    return [];
  }
  // if step is negative iterate down from start to end with step as the increment and push to myArray
  if (step < 0){
    for(var i = start; i >= end; i -= step){
      myArray.push(i);
    }
    // else if step is positive iterate up from start to end with step as the increment and push to myArray
  } else {
    for (var i = start; i <= end; i += step){
      myArray.push(i);
    }
  }
  // return final myArray
  return myArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function sum with parameters array and total defaulting to 0
function sum(array, total=0) {
  // base case, if array length is 0 return total
  if (array.length === 0){
    return total;
  }
  // recursion, update total to sum of total and the first array element
  total += array[0]
  // return the funciton with the first array element removed and the updated total
  return sum(array.slice(1), total);
};

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function reverArray with parameter array
function reverseArray(array) {
  // create empty array variable to hold result
  var myArray = [];
  // iterate through array and add the current iteration to the *front of the result array
  for (var i = 0; i < array.length; i++){
    myArray.unshift(array[i]);
  }
  // return the result array
  return myArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function reverse in place with parameter aray
function reverseArrayInPlace(array) {
  // iterate through the first half of the array
  for(var i = 0; i < Math.floor(array.length/2); i++){
    // create a variable to store the current element of the array
    let front = array[i];
    // update the current element of the array to the mirror of itself on the end of the array
    array[i] = array[array.length - 1 - i];
    // update the mirror of the current element with the stored current element of the array
    array[array.length - 1 - i] = front;
  }
  // return result array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function arrayToList with parameter array
function arrayToList(array) {
  // create variable rest and set to null
  let rest = null;
  // iterate through array backwords and assign rest to an object with properties: value, which holds the current element of the array and rest, which holds the previous rest variable
  for (let i = array.length - 1; i >= 0; i--){
    rest = { value: array[i], rest: rest }
  }
  // return final object
  return rest;
}

// invoke arrayToList([1,2,3])
  // rest = null
  // flor loop in reverse
    // 2
      // rest = { value: 3, rest: null }
    // 1
      // rest = { value: 2, rest: { value: 3, rest: null } }
    // 0
      // rest = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } 
    

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function listToArray with parameters list and array defaulting to an empty array
function listToArray(list, array=[]) {
  // base, once rest hits null push the last value and return the array
  if (list.rest === null){
    array.push(list.value);
    return array;
  }
  // recursion, push the first list value from the given object
  array.push(list.value);
  // return the function with the value of rest (next object) and the updated array
  return listToArray(list.rest, array)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function prepend with parameters element, list
function prepend(element, list) {
  // return an object with the value of value being element and the given object as the value of rest
  return {
    value: element, 
    rest: list
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// creat funtion nth with parameters list, number
function nth(list, number) {
  // return the listToArray function with the list as the parameter and the given number as the index of the resulting array
  return listToArray(list)[number];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  // determine if x and y are both not objects
  if (typeof x !== 'object' && typeof y !== 'object'){
    return x === y;
  }
  // determine if EITHER x or y is not an object
  if (typeof x !== 'object' || typeof y !== 'object'){
    return false;
  }
  // create arrays of each object's keys
  let xKeys = Object.keys(x); // [array of keys in object]
  let yKeys = Object.keys(x); //  ^^^^^^^^^^^^^^^^^^^^
  // determine if xKeys and yKeys don't have the same length
  if (xKeys.length !== yKeys.length){
    return false;
  }
  // iterate through xKeys to see if properties match
  for (let i = 0; i < xKeys.length; i++){
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]]) ){
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
