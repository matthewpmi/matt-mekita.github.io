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



var oldestCustomer = function(array){
    return _.reduce(array, function(acc, current){
        if (current.age > acc.age){
            acc = current.name;
        }
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
var youngestCustomer = function(array){
    return _.reduce(array, function(acc, current){
        if (acc.age < current.age){
            current = acc.name;
        }
        return current;
    })
};


var averageBalance = function(array){
    let total = _.reduce(array, function(acc, current){
         let currentNum = current.balance.replace(/[$,]/g,"")
         return acc += parseFloat(currentNum);
     }, 0)
   return total / array.length;
 }
// turn balance variable from string into number removing $ and commas
// regex -> searches for patterns in a string
// balance.replaceAll('$', '');
// regex -> https://rubular.com/ -> /[$,]/g
// let newString = balance.replace(/[$,]/g,"")


var firstLetterCount = function(array, letter) {
    var firstArray = _.filter(array, function(customer){
        return customer.name[0].toLowerCase() === letter.toLowerCase();
    })
    return firstArray.length;
}

var friendFirstLetterCount = function(array, customer, letter) {
   for (let i = 0; i < array.length; i++){
        if (array[i].name === customer){
            var firstArray = _.filter(array[i].friends, function(friend){
                return friend.name[0].toLowerCase() === letter.toLowerCase();
            })
        }
    }
    return firstArray.length;
};


var friendsCount = function(array, name) {
    var friendsArray = [];
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[i].friends.length; j++){
          if (array[i].friends[j].name === name){
            friendsArray.push(array[i].name);
          }
        }
    }
    return friendsArray;
};

var topThreeTags;

var genderCount = function(array) {
    return _.reduce(array, function(obj, cust){
        if (cust.gender === 'male'){
            obj.male += 1;
        } else if (cust.gender === 'female'){
            obj.female += 1;
        } else if (cust.gender === 'non-binary'){
            obj['non-binary'] += 1;
        }
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
