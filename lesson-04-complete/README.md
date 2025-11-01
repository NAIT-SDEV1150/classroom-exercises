# Lesson 04 Starter

## Install dependencies and run the dev server

1. Extract the starter zip to `lesson-04`
2. Move into the `lesson-04/` directory:
```sh
cd lesson-04
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

## Instructor Demo and Student Exercise

Complete the demo along with your instructor and then attempt the exercise prompts (see the Student TODO comments at the end of the `main.js` file).

### Simple if

````js
const x = 5;
if (x > 0) {
  console.log('x is positive');
}
````

### if-else

````js
if (x % 2 === 0) {
  console.log('x is even');
} else {
  console.log('x is odd');
}
````

### Nested if-else

````js
if (x > 10) {
  console.log('x is greater than 10');
} else if (x < 0) {
  console.log('x is non-positive');
} else {
  console.log('x is between 1 and 10');
}
````

### while loop

````js
let count = 3;
while (count > 0) {
  console.log('Countdown:', count);
  count = count - 1;
}
````

### do-while loop

````js
let i = 0;
do {
  console.log('i is', i);
  i++;
} while (i < 3);
````

### for loop

````js
for (let j = 0; j < 3; j++) {
  console.log(`j = ${j}`);
}
````

### Debugging practice

This small snippet includes two intentional bugs for students to find and fix. Uncomment and correct each bug as part of the exercise. Use the DevTools to help find and correct the bugs.

````js
// Snippet with bugs for debugging practice
const num = 10;

if (num < 5) {
  console.log('num is greater than 5');
} else {
  console.log('num is 5 or less');
}

let k = 0;
while (k < 3) {
  k + 1;
  console.log(k);
}
````

## Push to your GitHub workbook repo

Once you're done making your own custom updates to the project, stage your files, commit your work, and push to the remote repository.

1. Open a terminal in VS Code
2. Stage all updated and created files:
```sh
git add .
```
3. Commit the changes:
```sh
git commit -m 'Lesson 04 Example'
```
4. Push your changes to the remote workbook repository: 
```sh
git push origin main
```