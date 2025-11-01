# Lesson 05 Starter

## Install dependencies and run the dev server

1. Extract the starter zip to `lesson-05`

2. Move into the `lesson-05/` directory:
```sh
cd lesson-05
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

Complete the demo along with your instructor.

### Selecting elements

````js
// Select elements from the page using CSS selectors
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

console.log('Selected elements:', { titleEl, taglineEl, heroImg, heroCaption, dynamicBox, footerNote });
````

### textContent vs innerHTML

````js
// When you need plain text use textContent
titleEl.textContent = 'DOM: Your JavaScript Window into Page Structure';

// innerHTML can insert markup — use carefully to avoid injecting untrusted content
dynamicBox.innerHTML = `
  <p class="desc">
  This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>
`;

// When you only need text (no markup), prefer textContent over innerText (marginal performance gain)
heroCaption.textContent = 'This caption was updated using textContent.';
````

### Attributes and inline styles

````js
// Set attributes and inline styles
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = '#0d6efd';
````

### Helper functions for reuse

````js
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) {
    return console.warn('No element found for', selector);
  }
  el.textContent = text;
}

function updateHTML(selector, html) {
  const el = document.querySelector(selector);
  if (!el) {
    return console.warn('No element found for', selector);
  }
  el.innerHTML = html;
}
````

### Call helpers to perform repeated tasks

````js
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');
updateHTML('#dynamic-box', `
  <p class="desc">
  Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.
  </p>
`);
````

### Class toggle and entity rendering

````js
footerNote.classList.add('footer-strong');
// Use innerHTML to render entities like © correctly
footerNote.innerHTML = '&copy; 2025 Front End Fundamentals';
// Try swapping textContent in for innerHTML above and see what happens
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
git commit -m 'Lesson 05 Example'
```
4. Push your changes to the remote workbook repository: 
```sh
git push origin main
```