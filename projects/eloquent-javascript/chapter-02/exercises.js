
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create function triangles with 1 parameter num
function triangles(num) {
  // create empty string to hold #
  var string = ''
  // create for loop to iterate through numbers 1-num
  for (var i = 1; i <= num; i++){
    // concatenate # to string as loop iterates
    string += '#'
    // log to console string as loop iterates
    console.log(string);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // create for loop to iterate through numbers 1-15
  for (var i = 1; i <= 15; i++){
    // determine if i is divisible by 15
    if (i % 15 === 0){
      // log fizzbuzz
      console.log('fizzbuzz');
    }
    // else determine if i is divisible by 5
    else if (i % 5 === 0){
      // log buzz
      console.log('buzz');
    }
    // else determine if i is divisible by 3
    else if (i % 3 === 0){
      // log fizz
      console.log('fizz');
    }
    // else log i
    else {
      console.log(i)
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  // create an empty string to hold output lines
  var board = ''
  // create a for loop to add new line at end of each row
  for (var i = 1; i <= num; i++){
    //create for loop to add characters to each row
    for (var j = 1; j <= num; j++){
      // use if statement to alternate ' ' and '#'
      if ((i + j) % 2 !== 0) {
        board += '#';
      }
      // else log ' '
      else {
        board += ' ';
      }
    }
    // add new line to end of each line
    board += '\n';
    // remove new line at the end
    // result = board.slice(0, -1)
    
  }
  // console.log(result)
  console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
