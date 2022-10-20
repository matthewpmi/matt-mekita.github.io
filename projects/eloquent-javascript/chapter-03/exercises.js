////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create funciton min with 2 parameters
function min(x, y) {
  // determine if x is greater than y and return y if true
  if (x > y){
    return y;
    // else return x if its not greater than y
  } else {
    return x;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function isEven with parameter
function isEven(n) {
  // determine if n is 0 and return true (even)
  if(n === 0){
    return true;
    // determine if n is 1 and return false (odd)
  } else if (n === 1){
    return false;
  }
  // determine if n is less than 0 and return isEven with n + 2 as parameter
  if(n < 0){
    return isEven(n+2)
    // determine if n is greater than 0 and return isEven with n - 2 as parameter
  } else if (n > 0){
    return isEven(n-2);
  }
};

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create funciton countChars that takes a string and a character as parameters
function countChars(string, char) {
  // create counting variable to add up number of chars in string
  var count = 0;
  // create for loop to iterate through string
  for (var i = 0; i < string.length; i++){
    // determine if current character is equal to given char
    if (string[i] === char){
      // add 1 to counting variable
      count++;
    }
  }
  // return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create funciton countBs that takes a string as parameter
function countBs(string) {
  // create counting variable to add up number of capital b's
  var count = 0;
  // create for loop to iterate through string
  for (var i = 0; i < string.length; i++){
    // determine if current character is capital b
    if (string[i] === 'B'){
      // add 1 to counting variable
      count++;
    }
  }
  // return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
