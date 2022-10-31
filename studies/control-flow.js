/**
 * CONTROL FLOW
 * 
 * 0: The control flow is the order in which a computer executes code in a program
 * 
 * 1: In general the code is run in order from top to bototm in the code although there are frequent structures that change the order.
 * 
 * 2: Block statements are lines of code wrapped in curly braces. Block statements are run repeatedly (loops) or are only run when certain conditions return true (if/else, conditional). Switch statements are another form of conditional statement that use code blocks however unlike if/else statements it tests the condition once and then perfoms the relevant expression. A default statement is provided if no condition is met.
 * 
 * 3: Functions also use blocks of code and are reusable. Functions can be called by name and can be provided with or without argurments.  
 * 
 */

// 1. if/else statement

if (1 < 2){ // condition
    return 10;   // code block to be executed if condition is true
} else if (1 < 2){ // condition
    return 8; // code block to be executed if first condition is false and this condition is true
} else {
    return 4; // else statement will execute if no previous conditions are true
}
// in the above if/else statement the 2nd code block will be returned because the first code block is false and the 2nd is true

// 2. switch statements

/**
 * Switch statements take in an expression and checks to see if specified cases match the expression. It will execute the expression in the first matching case untill a break statement is reached. A default clause will be executed if no switch cases match. If there is no break statement the case will 'fall' through until a break statement is encountered. Switch statements are usefull when the given expression can evaluate to many different values.
 */

 switch (month){ // we are checking the month against each case inside the code block
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('31 days'); // if the month is 1,3,5,7,8,10,12 we will log 31 days 
        break; // this will stop the switch statement from running as long as one of the cases above is true
    case 2:
        console.log('28 or 29 days');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('30 days');
        break;
    default: // this will execute if no other cases are true
        console.log('Not a month.');
        break;
}

// 3. loops
// (initialize; condition; increment)
for (let i = 0; i < 10; i++){ // inside the parenthesis of a for loop
    console.log(i); // will log numbers 0-9 to the console
}
// more on loops in the loop section

 // 4. Functions
 // Functions are declared with the keyword function followed by the name of the function and a pair of parenthesis with optional parameters
 function add(x, y){ // paremeters x, y
    return x + y;   // inside the curly braces is the code that will be executed when the function is called
 }
add(2, 4) // 6 -> calling a function with arguments 2, 4. Parameters are given to a function when it is created, arguments are given to a function when it is called

let multiply = function(x, y){ // functions can also be declared by being assigned to a variable
    return x * y; // they are called and operate in the same manner
} 
// more on functions in function section