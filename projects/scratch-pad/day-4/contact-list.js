// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var obj = {};
    obj.id = id;
    obj.nameFirst = nameFirst;
    obj.nameLast = nameLast;
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // create addContact property with function as value that takes a parameter contact
        addContact: function(contact){
            // push parameter contact to contacts array
            contacts.push(contact); 
        },
        // create findContact property with function as value that takes a parameter fullName
        findContact: function(fullName){
            // split fullName at space and assign it to array
            var fullNameArray = fullName.split(' ');
            // iterate over contacts array
            for (var i = 0; i < contacts.length; i++){
                // check if fullName corresponds to any nameFirst + nameLast in contact array
                if (contacts[i].nameFirst === fullNameArray[0] && contacts[i].nameLast === fullNameArray[1]){
                    // return applicable contacts
                    return contacts[i];
                }
            } 
        },
        // create removeContact property with function as value that takes a parameter contact
        removeContact: function(contact){
            // remove contact from contacts array
            contacts.splice(contact, 1);
        },
        // printAllContactNames property with function as value that takes no parameters
        printAllContactNames: function(){
            // create variable to store string
            var string = '';
            // iterate over contacts array
            for (var i = 0; i < contacts.length; i++){
                // concatenate each contact last and first name to string with spaces and new lines after each *except the last one
                string += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
            }
            // remove \n from end of string and assign it to a new variable
            var result = string.slice(0, -1);
            // return result
            return result;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
