# Lesson 08 Starter

## Rename the starter folder to to lesson-08/

## Install dependencies and run the dev server

1. Move into the `lesson-08/` directory:
```sh
cd lesson-08
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

### Load event and readiness

> NOTE: while it's possible to delay script execution until the `DOMContentLoaded` event has fired, if the script is loaded using `async`, `defer`, or `type="module"` attributes, it's unnecessary.

````js
// Wrap behavior in DOMContentLoaded to ensure elements exist
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  // Add your event listeners and DOM code here
});
````

### Selecting required elements

````js
const btnToggle = document.querySelector('#btn-toggle');
const btnMessage = document.querySelector('#btn-message');
const message = document.querySelector('#message');
const hoverCard = document.querySelector('#hover-card');
const hoverStatus = document.querySelector('#hover-status');
const keyOutput = document.querySelector('#key-output');
const list = document.querySelector('#list');
const selection = document.querySelector('#selection');
````

### `click` event: toggle a highlight class on the body

````js
btnToggle.addEventListener('click', () => {
  document.body.classList.toggle('highlight');
  const on = document.body.classList.contains('highlight');
  btnToggle.textContent = on ? 'Highlight is ON' : 'Highlight is OFF';
});
````

### `click` event: change message text

````js
btnMessage.addEventListener('click', () => {
  const timeString = new Date().toLocaleTimeString();
  message.textContent = `Message updated at ${timeString}`;
});
````

### `mouseover` and `mouseout` events: display hover status on the card

````js
hoverCard.addEventListener('mouseover', () => {
  hoverStatus.textContent = 'Status: Hovering';
});
hoverCard.addEventListener('mouseout', () => {
  hoverStatus.textContent = 'Status: Not hovering';
});
````

### `keydown` event: show last key pressed

````js
document.addEventListener('keydown', (e) => {
  keyOutput.textContent = `Last key: ${e.key} (code: ${e.code})`;
});
````

### Event delegation: one listener on the `<ul>` for all `<li>` elements

Event delegation is a simple pattern where you attach one event listener to a common ancestor (for example a `<ul>`) rather than adding the same listener to each child (`<li>`). Because most DOM events bubble up from the originating element to its ancestors, the parent can catch the event and determine which child triggered it (using `event.target` or `event.target.closest()`). This makes delegation a great fit for lists, tables, or any container where items are added or removed dynamically.

````js
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    // Remove previous selection
    const prev = list.querySelector('li.active');
    if (prev) {
      prev.classList.remove('active');
    }

    // Activate clicked
    li.classList.add('active');

    const id = li.getAttribute('data-id');
    selection.textContent = `Selected: Item ${id}`;
  }
});
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
git commit -m 'Lesson 08 Example'
```
4. Push your changes to the remote workbook repository: 
```sh
git push origin main
```