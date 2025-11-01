# Lesson 09 Starter

## Install dependencies and run the dev server

0. Extract the starter zip and rename the folder to `lesson-09`
1. Move into the lesson-09/ directory:
```sh
cd lesson-09
```
2. Install the necessary dependencies:
```sh
npm install
```
or
```sh
npm i
```
3. Run the dev server with the `dev` script: 
```sh
npm run dev
```
4. Open the provided development server URL in your browser
5. You should see the default render for the vite project.
6. Use this as the base for today's examples.

## Instructor Demo and Student Exercise

Complete the demo along with your instructor and then attempt the exercise prompts (see the comments in the `main.js` file).

This lesson demonstrates event propagation (bubbling vs capture), how to stop propagation, and using event delegation to build a small image viewer (gallery). Follow the short, incremental snippets below during the live demo and run the page after each change.

### Propagation demo - Selecting required elements

````js
const log = document.getElementById('log');
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('btn-propagate');
````

### Propagation demo - Add listeners (outer, inner, button)

````js
// Outer div - named function
function outerClick() {
	log.textContent += 'Outer clicked | ';
}

outer.addEventListener('click', outerClick);

// Inner div - anonymous function (bubbling)
inner.addEventListener('click', function () {
	log.textContent += 'Inner clicked | ';
});

// Button - stops propagation so outer/inner don't receive the click
button.addEventListener('click', (event) => {
	log.textContent += 'Button clicked | ';
});
````

### Gallery demo - Selecting elements

````js
const thumbnails = document.querySelector('.thumbnails');
const mainImage = document.getElementById('main-image');
const viewer = document.querySelector('.viewer');
const closeBtn = document.getElementById('close-viewer');
````

### Gallery demo - Delegated thumbnail clicks

````js
thumbnails.addEventListener('click', (event) => {
	// Only handle clicks on thumbnail images
	if (event.target.tagName === 'IMG') {
		mainImage.src = event.target.src;
		viewer.classList.add('show');
	}
});
````

### Gallery demo - Close viewer

````js
closeBtn.addEventListener('click', () => {
	viewer.classList.remove('show');
});
````

## Student Exercise 

Update the example by adding the ability for the user to close the viewer with by pressing the escape key.

## Push to your GitHub workbook repo

Once you're done making your own custom updates to the project, stage your files, commit your work, and push to the remote repository.

1. Open a terminal in VS Code
2. Stage all updated and created files:
```sh
git add .
```
3. Commit the changes:
```sh
git commit -m 'Lesson 9 Example'
```
4. Push your changes to the remote workbook repository: 
```sh
git push origin main
```