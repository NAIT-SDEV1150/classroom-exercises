console.log('Lesson 10 starter loaded');

// 1. Select required elements
const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

// 2. Function to gather and structure form data
function serializeForm(formEl) {
  // Access values using both form.elements and query selectors
  // Use destructure as below or, for simplicity, just use form.elements and
  // assign individual variables
  const { fullName, email, bio } = formEl.elements;

  // Radio (plan)
  const plan = formEl.elements.plan.value;

  // Checkboxes (topics) - gather all checked values
  // Use Array.from to convert NodeList to Array, then map to values
  // or, for simplicity, use a for loop to gather checked values
  const topics = Array.from(formEl.querySelectorAll('input[name="topics"]:checked'))
    .map(cb => cb.value);

  return {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    plan,
    topics,
    bio: bio.value.trim(),
    submittedAt: new Date().toLocaleString(),
  };
}

// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button
// Prevent default behavior (navigation/reload) using event.preventDefault()
form.addEventListener('submit', (event) => {
  // Stop the default navigation/reload behavior
  event.preventDefault();

  // Read input values
  const data = serializeForm(form);

  // Show a structured, human-friendly summary (no innerHTML needed)
  result.textContent
    = `Submission received:
      - Name: ${data.fullName || '(none)'}
      - Email: ${data.email || '(none)'}
      - Skill: ${data.plan || '(none)'}
      - Strengths: ${data.topics.length ? data.topics.join(', ') : '(none)'}
      - Bio: ${data.bio || '(none)'}
      - Time: ${data.submittedAt}`;

  // Optionally: keep the form as-is so students can see values,
  // or clear it (uncomment next line if you prefer a reset on submit).
  // form.reset();
});

// 4. Handle form reset - reset the result area text when the form is reset
form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission…';
});
