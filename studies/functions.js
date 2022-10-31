/**
 * FUNCTIONS:
 * 
 * 0: Functions are reusable blocks of code that return values.
 * 
 * 1: To define a function we use the keyword function followed by the name of the function and optional parameters enclosed in parenthesis. The block of code to be executed follows and is enclosed in curly braces.
 * 
 * 2: Function expressions are functions that are assigned to a variable. The parameters and curly braces remain the same. 
 * 
 * 3: When a function is a property of an object we refer to it as a method. Methods can be called with dot notation on the object name.
 * 
 * 4: Calling a function is done by typing the name of the function followed by parenthesis with arguments in-place of the parameters.
 * 
 * 5: Variables created within in the function are scoped to that function meaning they cannot be accessed outside of the funciton.
 * 
 * 6: Functions can call themselves. This is referred to as recursion. When using recursive functions the arguments must be altered so that eventually a base case is hit so that the function doesn't run forever, similar to loops.
 * 
 * 7: When functions take other functions as arguments or contain functions in their code blocks they are referred to as higher-order functions. Functions that are within other functions have access to the outer functions variables and 'remember' them. When an inner function uses an outer functions variable in it's own code block it's called closure.
 * 
 * 8: Rest paramters are parameters denoted by ...x. These parameters allow the function to take in an indefinite number of parameters as an array.
 * 
 * 9: Arrow functions are another way of writing functions with simplified syntax.
 * 
 * 10: There are many predefined functions in javascript that can be called as methods attached to appropriate datatypes.
 * 
 */

// 1 Function Definition
function add(x, y){ // we have defined funciton add with parameters x, y
    return x + y; // we will return the sum of x and y
}

// 2 Function Expression
let multiply = function(x, y){ // we have set variable multiply to equal a function with parameters x, y
    return x * y; // we will return the product of x and y
}

// 3 Functions in objects
let myObj = {
    name: 'matt',
    age: function(currentYear, birthYear){ // function defined as a property of an object
        return currentYear - birthYear;
    }
}
myObj.age(2022, 1990); // function age being called as a method on myObj object // returns 32

// 4 Calling functions
add(2, 3); // 5 // calling add function with arguments 2, 3
multiply(4, 5); // 20 // calling multiply funciton with arguments 4, 5

// 5 Function scopes/Higher order functions
function teamScore() { // teamScore is created with to variables and function add inside its code block. teamScore is a higher order function
    const round1 = 1;
    const round2 = 4;
    function add(){
        return round1 + round2; // function add has access to variables created in teamScore and returns their sum. When the inner funciton uses the outer funciton's variables we call it closure
    }
    return add; // the outer function returns the result of the inner function
}

// 6 Recursion

const podcasts = [
    {
      name: "How Did This Get Made",
      category: "Comedy",
      producer: "Earwolf",
      downloads: 5
    },
    {
      name: "Slowburn",
      category: "News/Documentary",
      producer: "Slate",
      downloads: 10
    },
    {
      name: "Comedy Bang Bang",
      category: "Comedy",
      producer: "Earwolf",
      downloads: 3
    },
    {
      name: "Southlake",
      category: "News/Documentary",
      producer: "NBC News",
      downloads: 8
    },
    {
      name: "The Big Picture",
      category: "TV/Film",
      producer: "Ringer Podcast Network",
      downloads: 15
    }
  ];

function getDownloadTotal(array, sum=0){ // function getDownloadTotal takes parameters array, sum defaulting to 0
    // base
    if (array.length === 0){ // the base case used to 'get out' of recursion. Will return the final result of the function
      return sum;
    }
    // recursion
      sum += array[0].downloads // this will be run for every function call until the base case is hit.
      return getDownloadTotal(array.slice(1), sum) // calling the function again while altering the input so that it can reach the base case eventually and preserve the sum which will eventually be returned
  }

 // 7 Rest parameters
 function addAll(numToAdd, ...nums){ // addAll takes parameter numToAdd and an indefinite number of numbers
    return nums.map((e) => numToAdd + e); // nums is an array so we can call method map on it and return a new array with each num + numToAdd
 }
 console.log(addAll(2, 1, 3, 4)); // logs [3, 5, 6]

 // 8 Arrow functions
 const patients = [
    {
      name: "Abe Froman",
      age: 56,
      gender: "male",
      preexistingConditions: ["Heart disease", "High cholesterol"],
      allergies: []
    },
    {
      name: "Kendall Roy",
      age: 40,
      gender: "male",
      preexistingConditions: ["Depression", "Drug addiction"],
      allergies: ["Peanuts", "Penicilin"]
    },
    {
      name: "Leslie Knope",
      age: 45,
      gender: "female",
      preexistingConditions: ["High blood pressure", "High cholesterol"],
      allergies: [],
    },
    {
      name: "Adira",
      age: 18,
      gender: "non-binary",
      preexistingConditions: ["Symbiont"],
      allergies: ["Pencilin"]
    },
    {
      name: "Dee Reynolds",
      age: 44,
      gender: "female",
      preexistingConditions: ["Heart disease", "High blood pressure", "Alcoholism", "Drug Addiction"],
      allergies: []
    }
  ];

let allergiesNo = patients.filter(function(patient){ // the callback function is using normal function syntax
    return patient.allergies.length === 0
})
console.log(allergiesNo) // logs the same as noAllergies

let noAllergies = patients.filter(patient => patient.allergies.length === 0) // the callback function is using arrow function syntax
console.log(noAllergies); // logs the same as allergiesNo

// 9 Predefined functions examples

String.slice() // will take parameters representing index of a string and return a copy of that string with specified indeces removed

array.length() // will return the length of an array

// there are many more predefined functions but they are all called with dot notation attached to the appropriate datatype followed by parenthesis
