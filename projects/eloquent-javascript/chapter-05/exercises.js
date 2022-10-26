// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  return array.reduce(function(acc, arr){
    acc = acc.concat(arr);
    return acc;
  }, [])
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)){
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {
  for (let i = 0; i < array.length; i++){
    if (func(array[i]) === false){
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  // create two arrays to store rtl values and ltr values
  let ltr = 0;
  let rtl = 0;
  // iterate through string
  for (let i = 0; i < string.length; i++){
    let code = string.charCodeAt(i);
    let script = characterScript(code)
    if(script !== null){
      script.direction === 'ltr' ? ltr++ : rtl++;
    }
  }
  return ltr > rtl ? 'ltr' : 'rtl';
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
