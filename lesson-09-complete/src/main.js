console.log('Lesson 10 starter loaded');

// ============== Propagation demo

// 1. Select required elements
const log = document.getElementById('log');
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('btn-propagate');

// 2. Add event listeners

// 2.1 Outer div - using a named function


// Instructor note: run clicks on the button, the inner region, and the outer
// region and observe the `log` text. Then remove `stopPropagation()` to show
// bubbling, and try `{ capture: true }` on the outer listener to show capture
// behavior.

function outerClick() {
  log.textContent += 'Outer clicked (capture) | ';
}

outer.addEventListener('click', outerClick); // TODO: Demo capture option

// 2.2 Inner div - using an anonymous function
inner.addEventListener('click', function () {
  log.textContent += 'Inner clicked (bubble) | ';
});

// 2.3 Button - using an arrow function
button.addEventListener('click', (event) => {
  log.textContent += 'Button clicked | ';
  // TODO: Demo stopping propagation
  event.stopPropagation();
});

// ============== Gallery demo

// 1. Select required elements
const thumbnails = document.querySelector('.thumbnails');
const mainImage = document.getElementById('main-image');
const viewer = document.querySelector('.viewer');
const closeBtn = document.getElementById('close-viewer');

// 2. Add event listeners

// 2.1 Thumbnails container - using an arrow function
thumbnails.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    mainImage.src = event.target.src;
    viewer.classList.add('show');
  }
});

// 2.2 Close button - using an arrow function
closeBtn.addEventListener('click', () => {
  viewer.classList.remove('show');
});

// Student TODO: Add event listener to document, which closes
// the viewer when the Escape key is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    viewer.classList.remove('show');
  }
});
