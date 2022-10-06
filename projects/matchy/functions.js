/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function search that takes array animals, takes a string (the name of an animal)
function search(array, string){
    // iterate through given array
    for (var i = 0; i < array.length; i++){
        // determine if string is in any of the array elements
        if (array[i].name === string) {
            // return array that contains the string
            return array[i];
        } 
    }
    // return null if for loop returns nothing
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create funciton replace with array, string, object as parameters
function replace(array, string, object){
//     var obj = search(array, string);
//     if (obj !== null){
//         obj = object;
//         return; 
//     }
//     return null;
// }
// iterate through given array
    for (var i = 0; i < array.length; i++){
        // determine if string is in any of the array elements
        if (array[i].name === string) {
            // replace array element with object if string is in the element
            return array.splice(i, 1, object);
        } 
    }
    // return null if for loop returns nothing
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create funciton remove with array, string as parameters
function remove(array, string){
    // iterate through given array
    for (var i = 0; i < array.length; i++){
        // determine if string is in any of the array elements
        if (array[i].name === string) {
            // delete array element if string is in the element
            return array.splice(i, 1);
        } 
    }
    // return null if for loop returns nothing
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create funciton add with array, object as parameters
function add(array, object){
    // check if animal object has a name with length > 0 and species with length > 0
    if (object.name.length > 0 && object.species.length > 0){
        // iterate through given array if prior conditions are both met
        for (var i = 0; i < array.length; i++){
            // determine if any array element contains the object key name
            if (array[i].name === object.name){
                // return null
                return null;
                // if not add object to array
            } else {
                array.push(object);
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
