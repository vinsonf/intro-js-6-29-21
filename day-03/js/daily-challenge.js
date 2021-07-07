// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string


// Answer 1
const firstName = prompt('what is your first name');
const firstNameFlipped = firstName.split('').reverse().join('');
alert(firstNameFlipped);

alert(prompt('what is your name?').split('').reverse().join(''));

// Challenge 2
// Prompt for a number value (provide a default of 10)

const number1 = parseInt( prompt('number 1?', 10) );
// Prompt for a second number value (provide a default of 10)
const number2 = parseInt( prompt('number 2?', 10) );

// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result

alert(number1 + number2);