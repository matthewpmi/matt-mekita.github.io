/*
LOOPS
0: Loops are used to execute a block of code multiple times while a condition remains true. If, for example, you wanted to log to the console every number from 1 to 100, you could use a loop instead of having to type out each number.

1: While loops are created using the 'while' keyword followed by parenthesis containing a conditional statement.One of the values in the conditional statement must be a variable

2: For loops accomplish the same thing as while loops using different syntax.  For loops are created using the 'for' keyword followed by parenthesis containing 3 expressions seperated by semicolons. The first expression is initialization in which a counting variable is created. The second expression is the condition that must remain true for the code block to execute. The final expression is the increment or decrement which will be applied to the counting variable

3: For in loops are different than for and while loops as they apply specifically to objects. For in loops are created using the 'for' keyword followed by parenthesis. Inside the parenthesis is a variable followed by the keyword 'in' and the name of the object that we are iterating over. The variable will represent each property inside the object allowing us to access every key and value pair
*/

// 1 While loops

// first the variable must be declared and assigned a value
var i = 1;
//    condition
while (i <= 10){
  // after the parenthesis there will be a code block inside {} that will execute until the condition is false
  console.log(i);
  // there must be some sort of incrementation (or decrementation) applied to the variable in the condition so that the condition approaches becoming false
  i++;
}
// once the condition is false we will 'break out' of the while loop and it will stop executing

console.log('\n')

// 2 For loops

for (var i = 10; i >= 0; i--){
  // code block inside {} to execute while the condition (i >= 0) is true
  console.log(i);
}

console.log('\n')

// example with an array in reverse
var pets = ['dog', 'cat', 'bird', 'fish'];
// loop over array in reverse
for (var i = pets.length - 1; i >= 0; i--){
  // log each pet to console in reverse
  console.log(pets[i]);
}

console.log('\n')

// example with an array
var pets = ['dog', 'cat', 'bird', 'fish'];
// loop over array 
for (var i = 0; i < pets.length; i++){
  // log each pet to console
  console.log(pets[i]);
}

console.log('\n')

// 3 For in loops

var team = {
  name: 'Jets',
  city: 'New York',
  conference: 'AFC'
}

for (var prop in team){
  // code block inside {} to execute for each property in the team object
    // this will log each key in the team object followed by the value located at each key in the team object
  console.log(prop, team[prop])
}