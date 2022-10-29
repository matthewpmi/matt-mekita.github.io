// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./matt-mekita.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//DUBUGGING
// navigate to cd projects/let-s-get-functional
// node index.js
var maleCount = function(array) {
    // implement _.filter() to return array of only male customers
    let males = _.filter(array, function(customer){
        // return true if the input customer is male
        return customer.gender === 'male';
    });
    // return length of returned array
    return males.length
};

var femaleCount = function(array) {
    // implement _.reduce() to return number of female customers
    return _.reduce(array, function(acc, current){
        // acc = 0 | current = { name: 'Stephanie', gender: 'female' }

        // interact with the current customer object to keep track of the number
        // of female customers
        // determine if current.gender is female
        if (current.gender === 'female'){
            // increment acc by 1
            acc += 1;
        }
        return acc;
    }, 0);
}

/*
// invoke reduce()
        // seed or no seed => result = 0

        // for loop
            // 0
                // result = func(result, {customer}, 0, [...])
                                    0
*/                          


// create function oldestCustomer with parameter array
var oldestCustomer = function(array){
    // return the result of reduce with parameters array, function with parameters acc, current, and no seed
    return _.reduce(array, function(acc, current){
        // determine if current.age is greater than acc.age and set acc to current name if it is *this seems like it shouldn't work but it does?
        if (current.age > acc.age){
            acc = current.name;
        }
        // return acc
        return acc;
    })
};

// var youngestCustomer = function(array){
//     return _.reduce(array, function(acc, current){
//         if (current.age < acc.age){
//             acc = current.name;
//         }
//         return acc;
//     })
// };
// create function youngestCustomer with parameter array
var youngestCustomer = function(array){
    // return the result of reduce with parameters array, function with parameters acc, current, and no seed
    return _.reduce(array, function(acc, current){
        // determine if acc.age is less than current.age and set current to acc.name **this seems like it shouldn't work but it does?
        if (acc.age < current.age){
            current = acc.name;
        }
        // return acc
        return current;
    })
};

// create function averageBalance with parameter array
var averageBalance = function(array){
    // create variable total and set it to result of reduce with paramters array, function with parameters acc, current, seed=0
    let total = _.reduce(array, function(acc, current){
        // create function currentNum to store the current balance with $ and , removed
         let currentNum = current.balance.replace(/[$,]/g,"")
         // return acc + acc + currentNum turned into a number
         return acc += parseFloat(currentNum);
     }, 0)
     // return result of reduce divided by length of given array
   return total / array.length;
 }
// turn balance variable from string into number removing $ and commas
// regex -> searches for patterns in a string
// balance.replaceAll('$', '');
// regex -> https://rubular.com/ -> /[$,]/g
// let newString = balance.replace(/[$,]/g,"")

// create function firstLetterCount with parameters array, letter
var firstLetterCount = function(array, letter) {
    // create variable firstArray and assign it to result of filter with parameters array, funciton with parameter customer
    var firstArray = _.filter(array, function(customer){
        // return true if the first letter of customer name matches given letter
        return customer.name[0].toLowerCase() === letter.toLowerCase();
    })
    // return length of array returned by filter
    return firstArray.length;
}
// create function friendFirstLetterCount with parameters array, customer, letter
var friendFirstLetterCount = function(array, customer, letter) {
    // iterate through array and determine if the current element.name equals given customer
   for (let i = 0; i < array.length; i++){
        if (array[i].name === customer){
            // create variable to hold result of filter with parameters current array element.friends, function with paramter friend
            var firstArray = _.filter(array[i].friends, function(friend){
                // return true if first letter of friend's name equals given letter
                return friend.name[0].toLowerCase() === letter.toLowerCase();
            })
        }
    }
    // return length of result array
    return firstArray.length;
};

// create function friendsCount with parameters array, name
var friendsCount = function(array, name) {
    // create variable to store result array
    var friendsArray = [];
    // iterate through given variable
    for (var i = 0; i < array.length; i++){
        // iterate through current element's friends array
        for (var j = 0; j < array[i].friends.length; j++){
            // determine if current array element's friends array current element is equal to given name
          if (array[i].friends[j].name === name){
            // push current array element's name to result array
            friendsArray.push(array[i].name);
          }
        }
    }
    // return result array
    return friendsArray;
};
// create funciton topThreeTags with parameter array
var topThreeTags = function(array) {
    // create variable to store all tags in an array
    var tagsArray = [];  
    // iterate through given array
    for (let i = 0; i < array.length; i++){
        // iterate through current array element's tags array
      for (let j = 0; j < array[i].tags.length; j++){
        // push to tagsArray all the tags of each element of array
        tagsArray.push(array[i].tags[j]);
      }
    }
    // create variable to store object which is result of reduce function with parameters tagsArray, function with parameters obj, tag, seed = {}
    var tagsObj = _.reduce(tagsArray, function(obj, tag){
        // determine if the property tag exists in obj and if not assign it to 1
      if (!obj[tag]){
        obj[tag] = 1
      }
      // if it does exist add 1 to it
      else {
        obj[tag] += 1
      }
      // return the result object
      return obj
    }, {})
    // object.entries -> array of sub arrays
    // array.sort -> sort array by values
    // slice
    // create an array of sub arrays of the tagsObj with Object.entries and store in tagsValues
    var tagsValues = Object.entries(tagsObj);
    // sort tagsValues array in order of lowest to highest
    tagsValues.sort((a, b) => a[1] - b[1]);
    // create variable to store new array with just the final three elements of tagsValues
    var threeTagsValues = tagsValues.splice(-3);
    // assign a new variable to threeTagsValues flattened so there are no longer any subarrays
    var topThree = threeTagsValues.flat();
    // store result in an empty array
    var result =[];
    // iterate through topThree incrementing every second elemnt to just get the tags without the values 
    for (let i = 0; i < topThree.length; i += 2){
        // push tags to result array
      result.push(topThree[i])
    }
    // return result array
    return result;
  };
// create function gendercount with parameter array
var genderCount = function(array) {
    // return result of reduce with parameters array, function with paramenters obj, cust, and a seed with object format
    return _.reduce(array, function(obj, cust){
        // determine if customers gender is male and add one
        if (cust.gender === 'male'){
            obj.male += 1;
            // else determine if customers gender is female and add one
        } else if (cust.gender === 'female'){
            obj.female += 1;
            // else determine if customers gender is non-binary and add one
        } else if (cust.gender === 'non-binary'){
            obj['non-binary'] += 1;
        }
        // return resulting object
        return obj;
    }, {'male': 0,
       'female': 0,
       'non-binary': 0})
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
