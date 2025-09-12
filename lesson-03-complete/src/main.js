console.log('Lesson 03 starter loaded');

// 1. Variable declarations
var greeting = 'Hello, world!'; // string variable
let count = 3; // number variable
const isActive = true; // boolean variable

// 2. Log types
console.log('Type of greeting:', typeof greeting);
console.log('Type of count:', typeof count);
console.log('Type of isActive:', typeof isActive);

// 3. Built-in function demonstrations
// alert, prompt, confirm
alert('Welcome to the JavaScript demo!');
const userName = prompt('Enter your name:');
const continueDemo = confirm(`Hi ${userName}, shall we continue the demo?`);
console.log('User chose to continue:', continueDemo);

// 4. parseInt and toString
const strNumber = '42';
const parsedNumber = parseInt(strNumber, 10); // There are other options like parseFloat, Number, +, etc.
console.log(`Parsed "${strNumber}" to number:`, parsedNumber);
console.log('Convert number back to string:', parsedNumber.toString());

// 5. Simple arithmetic operations
let x = 10;
let y = 5;
console.log(`${x} + ${y} =`, x + y);
console.log(`${x} - ${y} =`, x - y);
console.log(`${x} * ${y} =`, x * y);
console.log(`${x} / ${y} =`, x / y);

// 6. Array and object example
const fruits = ['apple', 'banana', 'cherry'];
console.log('Fruits array:', fruits);
const person = { name: userName, age: parsedNumber };
console.log('Person object:', person);

// Student TODO: 
// Prompt the user for their name and age
// Log a greeting message using the provided name and age