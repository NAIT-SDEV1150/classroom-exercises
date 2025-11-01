console.log('Lesson 08 starter loaded');

// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // 2. Selecting elements
  const btnToggle = document.querySelector('#btn-toggle');
  const btnMessage = document.querySelector('#btn-message');
  const message = document.querySelector('#message');
  const hoverCard = document.querySelector('#hover-card');
  const hoverStatus = document.querySelector('#hover-status');
  const keyOutput = document.querySelector('#key-output');
  const list = document.querySelector('#list');
  const selection = document.querySelector('#selection');

  // 3. click: toggle a highlight class on the body
  btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('highlight');
    const on = document.body.classList.contains('highlight');
    if (on === true) {
      btnToggle.textContent = 'Highlight is ON';
    } else {
      btnToggle.textContent = 'Highlight is OFF';
    }
    // Or using a ternary operator:
    // message.textContent = on ? 'Highlight is ON' : 'Highlight is OFF';
  });

  // 4. click: change message textContent (no HTML parsing)
  btnMessage.addEventListener('click', () => {
    const timeString = new Date().toLocaleTimeString();
    message.textContent = `Message updated at ${timeString}`;
  });

  // 5. mouseover / mouseout: display hover status on the card
  hoverCard.addEventListener('mouseover', () => {
    hoverStatus.textContent = 'Status: Hovering';
  });
  hoverCard.addEventListener('mouseout', () => {
    hoverStatus.textContent = 'Status: Not hovering';
  });

  // 6. keydown: show last key pressed (global listener)
  document.addEventListener('keydown', (e) => {
    keyOutput.textContent = `Last key: ${e.key} (code: ${e.code})`;
  });

  // 7. Event delegation: one listener on the <ul> for all <li> elements
  list.addEventListener('click', (e) => {
    // Only proceed if an <li> was clicked
    // Or use closest() to allow clicks on child elements:
    // const li = e.target.closest('li');
    // if (li) {...};
    if (e.target.tagName === 'LI') {
      const li = e.target;
      // remove previous selection
      const prev = list.querySelector('li.active');
      if (prev) {
        prev.classList.remove('active');
      }

      // Or iterate over all, find the one active, and remove it:
      // list.querySelectorAll('li.active').forEach(el => el.classList.remove('active'));
      

      // activate clicked
      li.classList.add('active');

      const id = li.getAttribute('data-id');
      selection.textContent = `Selected: Item ${id}`;
    }
  });
});
