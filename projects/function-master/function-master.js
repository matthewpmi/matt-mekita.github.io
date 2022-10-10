//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function objectValues with object parameter
function objectValues(object) {
    // create empty array to hold object values
    var array = [];
    // create for in loop to iterate through object keys
    for(var key in object){
        // push object key values to array
       array.push(object[key]);
    }
    // return array
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function keysToString with object as parameter
function keysToString(object) {
    // create variable with empty string as value
    var string = '';
    // create for in loop to iterate through object keys
    for(var key in object){
        // concatenate object keys to empty string with a space
        string += key + " ";
    }
    // remove space at the end of the string
    var result = string.slice(0, -1)
    // return string
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function valuesToString with object as parameter
function valuesToString(object) {
    // create variable with empty string as value
    var string = '';
    // create for in loop to iterate through object
    for(var key in object){
        // determine if the current object key's value is a string
        if(typeof object[key] === "string"){
            // concatenate string with current object key's value with a space
            string += object[key] + " ";
        }
    }
    // remove space at the end of the string
    var result = string.slice(0, -1)
    // return string
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function arrayOrObject with colleciton as parameter
function arrayOrObject(collection) {
    // determine if its an array
    if(Array.isArray(collection)){
        // return string array
        return 'array';
        // else return string object
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function capitalizeWord with string as paramter
function capitalizeWord(string) {
    // create firstChar variable with value of strings first character capitalized
    var firstChar = string.charAt(0).toUpperCase();
    // update string to equal string without the first character
    string = string.slice(1, string.length);
    // return the capitalized first character concatenated with the updated string
    return firstChar + string;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function capitalizeAllWords with string as parameter
function capitalizeAllWords(string) {
    // create myArray variable with string split at spaces into array as value
    var myArray = string.split(" ");
    // create myString variable with empty string as value
    var myString = '';
    // create for loop to iterate through array
    for(var i = 0; i < myArray.length; i++){
        // create variable finalWord with current string's first character capitalized concatenated with the string minus the first character
        var finalWord = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1, myArray[i].length);
        // concatenate myString with a space and finalWord
        myString += " " + finalWord;         
    }
    // remove space from front of myString
    var result = myString.slice(1, myString.length)
    // return myString with all word's first letter capitalized
    return result;
}
// could have used finalWord.join(' ')
// https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/#:~:text=In%20JavaScript%2C%20we%20have%20a,%22%3B%20publication%5B0%5D.

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // return object name value capitalized inside of given string
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1, object.name.length) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // return object name and species capitlazed inside of given string
    return object.name.charAt(0).toUpperCase() + object.name.slice(1, object.name.length) + ' is a ' + object.species.charAt(0).toUpperCase() + object.species.slice(1, object.species.length)
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
     if (object.hasOwnProperty('noises')){
         if (object.noises.length === 0){
            return "there are no noises";
        } else {
            return object.noises.join(" ");
        }
    } else{
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var myArray = string.split(" ");
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === word){
            return true;
        }   
    }
    return false;
}


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.hasOwnProperty('friends')){
        for (var i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
                return true;
            }
        }
        return false;
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var newArray = [];
    var myArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            newArray = array[i].friends;
        }
    }
    for (var i = 0; i < array.length; i++) {
            if (newArray.indexOf(array[i].name) === -1 && array[i].name !== name){
               myArray.push(array[i].name)
        }
    }
  return myArray;
}


// function nonFriends(name, array) {
//     var newArray = [];
//     var myArray = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].name === name) {
//             newArray = array[i].friends;
//         }
//     }
//     for (var i = 0; i < array.length; i++) {
//         for (var i = 0; i < newArray.length; i++) {
//             if (array[i] !== newArray[i]){

//             }
//         }
//     }
// }



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) { 
        object[key] = value;
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object) {
        for (var i = 0; i < array.length; i++) {
            if (key === array[i]) {
                delete object[key];
            }
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1){
           newArray.push(array[i])
            }
          }
          return newArray;
      }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}