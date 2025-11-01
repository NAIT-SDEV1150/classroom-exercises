# Lesson 03 Starter

## Install dependencies and run the dev server

1. Extract the starter zip to `lesson-03`
2. Move into the `lesson-03/` directory:
```sh
cd lesson-03
```
3. Install the necessary dependencies:
```sh
npm install
```
or
```sh
npm i
```
4. Run the dev server with the `dev` script: 
```sh
npm run dev
```
5. Open the provided development server URL in your browser
6. You should see the default render for the vite project.
7. Use this as the base for today's examples.

## Intro to JavaScript

JavaScript is the language that makes web pages interactive. It runs in the browser and can read or change the page's DOM, respond to user actions, and communicate with servers. A few high-level points for beginners:

- Where JavaScript runs: Modern web pages run JavaScript in the browser (client-side). Tools like Node.js allow JavaScript to run outside the browser (server-side), but for now we focus on code that runs in the browser.
- How the browser executes scripts: When the browser loads a page it parses HTML into a DOM. Script tags (`<script>`) are executed as the parser encounters them (unless marked `defer`, `async`, or include a `type="module"` attribute). Scripts can read and modify the DOM *after* it exists.
- Interpretation and engines: Browsers use JavaScript engines (e.g., V8 in Chrome) that parse JavaScript source and execute it. You don't need to worry about the internals, just know the browser runs your code.
- Event loop and responsiveness: The browser uses an event loop to handle tasks (like user clicks, timers, and network callbacks). Long-running synchronous code can block the UI, so asynchronous patterns (callbacks, promises, async/await) are used to keep pages responsive. We will cover these in more detail later in the course.
- Console and debugging: Use `console.log()` to print values to the DevTools console while learning. The browser's DevTools (right-click then select Inspect --> Console and Sources tabs) are essential for debugging and stepping through code.
- Errors and exceptions: Syntax errors prevent scripts from running; runtime errors appear in the console. Read error messages and stack traces to know where to look to fix problems.
- Best practices for beginners:
	- Keep scripts small and focused. Test frequently in the browser.
	- Prefer `const` and `let` over `var` for variables.
	- Use meaningful names and add comments for clarity.

The `main.js` file in the lesson will be used to introduce some of the basics of JavaScript. We will cover the following:
- simple variable declaration and use
- built-in functions
- intro to data types and operators

## ESLint

This exercise project has been configured to use [ESLint](https://eslint.org/). From the website:

> ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

We will make use of ESLint, with the provided configuration, to ensure we are writing clean and consistent JavaScript. Your instructor will walk you through the necessary steps to configure your editor to make use of ESLint as you write your own code.

## Instructor Demo and Student Exercise

Complete the demo along with your instructor and then attempt the exercise prompts (see the TODO comments in the `main.js` file).

### Basic logging and variables

````js
// print a message to confirm the script is loaded
console.log('Lesson 03 starter loaded');

// variable examples
const greeting = 'Hello, world!';
let count = 3;
const isActive = true;

console.log(greeting, count, isActive);
````

### Inspecting types

````js
console.log('Type of greeting:', typeof greeting);
console.log('Type of count:', typeof count);
console.log('Type of isActive:', typeof isActive);
````

### Built-in browser functions

````js
// The following functions will open small browser dialogs
alert('Welcome to the JavaScript demo!');
const userName = prompt('Enter your name:');
const continueDemo = confirm(`Hi ${userName}, shall we continue the demo?`);
console.log('User chose to continue:', continueDemo);
````

### Converting types

````js
const strNumber = '42';
const parsedNumber = parseInt(strNumber, 10); // There are other options like parseFloat, Number, +, etc.
console.log(`Parsed "${strNumber}" to number:`, parsedNumber);
console.log('Convert number back to string:', parsedNumber.toString());
````

### Arithmetic and simple expressions

````js
let x = 10;
let y = 5;
console.log(`${x} + ${y} =`, x + y);
console.log(`${x} - ${y} =`, x - y);
console.log(`${x} * ${y} =`, x * y);
console.log(`${x} / ${y} =`, x / y);
````

### Arrays and objects

````js
const fruits = ['apple', 'banana', 'cherry'];
console.log('Fruits array:', fruits);

const person = { name: 'Alex', age: 30 };
console.log('Person object:', person);
````

### Student exercise

Follow the TODO comments at the end of the `main.js` file.

## Push to your GitHub workbook repo

Once you've made any updates to the project, stage your files, commit your work, and push to the remote repository.

1. Open a terminal in VS Code
2. Stage all updated and created files:
```sh
git add .
```
1. Commit the changes:
```sh
git commit -m 'Lesson 03 Example'
```
1. Push your changes to the remote workbook repository: 
```sh
git push origin main
```