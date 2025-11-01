# Lesson 11 Starter

## Install dependencies and run the dev server

0. Extract the starter zip and rename the folder to `lesson-11`
1. Move into the lesson-11/ directory:
```sh
cd lesson-11
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

This lesson builds on form handling from the previous lesson and focuses on validation: how to check inputs as users type, provide helpful messages, and validate everything again on submit.

### Review updates to `index.html` - HTML 5 validation

The `index.html` file has been updated to make use of the default HTML 5 validation attributes. In this case, the `required` attribute has been added to the `fullName` and `email` inputs.

```html
<fieldset>
  <legend>Basic Info</legend>
  <label>
    Full Name
    <input type="text" name="fullName" placeholder="NAIT Student" required>
  </label>
  <label>
    Email
    <input type="email" name="email" placeholder="name@example.com" required>
  </label>
</fieldset>
```

If you try to submit the form as it is, with empty fleids, the browser will prevent submission and display browser formatted error messages (typically in a small tooltip-like popup). There are a number of additional attributes you can use to take advantage of the browser's validation capabilities. You can read more about them on the MDN site [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation).

### Add live validation on `input` events

````js
form.addEventListener('input', (e) => {
  const target = e.target;

  // fullName: require at least two words
  if (target.name === 'fullName') {
    const nameParts = target.value.trim().split(' ');
    if (nameParts.length < 2) {
      target.setCustomValidity('Full Name must contain at least two words.');
    } else {
      target.setCustomValidity('');
    }
  }

  // bio: minimum length of 40 chars
  if (target.name === 'bio') {
    if (target.value.trim().length < 40) {
      target.setCustomValidity('Bio must be at least 40 characters long.');
    } else {
      target.setCustomValidity('');
    }
  }

  // email: basic '@' check (optional: replace with regex)
  if (target.name === 'email') {
    if (!target.value.includes('@')) {
      target.setCustomValidity('Email must contain an "@" symbol.');
    } else {
      target.setCustomValidity('');
    }
  }

  // Show the browser's validation message for the specific field
  target.reportValidity();
});
````

### Check for valid inputs on form submission

````js
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const data = serializeForm(form);

  if (form.checkValidity()) {
    result.textContent = `
    Submission received:
    - Name: ${data.fullName}
    - Email: ${data.email}
    - Bio: ${data.bio}
    - Plan: ${data.plan}
    - Topics: ${data.topics}
  `;
});
````

## Tips

- Keep validation logic in small, reusable functions so you can call the same checks from both the `input` handler and your submit flow.
- Use `target.setCustomValidity('...')` to set a helpful message for a specific field, and call `target.reportValidity()` to show it immediately while the user types.
- On submit, use `form.checkValidity()` to quickly detect builtin constraint failures, but run your custom validators for rules that HTML attributes don't cover before accepting the data.
- Test different invalid inputs in the browser (empty fields, too-short text, malformed emails, unchecked required checkboxes) and observe the messages. This helps you design clearer validation and user feedback.
- Optional: add the `novalidate` attribute to the `<form>` to disable browser popups and build your own validation UI (useful when you need custom styling or custom accessibility behavior).

## Student exercise 
**Implement a `novalidate` flow with custom UI**

1. Update the `<form>` in `index.html` to include the `novalidate` attribute to disable the browser's default popups.
2. Create a small custom UI for field errors (for example, a `<div class="error" data-for="fieldName"></div>` under each input).
3. Write a reusable validator function (or functions) that returns an error message when a field is invalid, or an empty string when valid.
4. Call those validators from the `input` event to show/hide the per-field error UI in real time, and call them again on `submit` to validate the submission flow.
5. On submit, if all validators pass, show a success message in the `result` area; otherwise, set focus on the first invalid field.

**Hints**

- Use `document.querySelector('<error-selector>')` or `element.nextElementSibling` to find the error container for a field.
- Keep the UI simple. Show a red message under the input and add an `.invalid` class to the input when there's an error.
- Try empty required fields, too-short bios, and malformed emails to confirm your custom messages appear.

### Acceptance criteria

- The browser's native popups are disabled (via `novalidate`) and all validation messages are shown in your custom UI.
- Validation runs on both `input` (live feedback) and `submit` (final check).
- Your validators are small and reusable (same code can be used from both places).

## Push to your GitHub workbook repo

Once you're done making your own custom updates to the project, stage your files, commit your work, and push to the remote repository.

1. Open a terminal in VS Code
2. Stage all updated and created files:
```sh
git add .
```
3. Commit the changes:
```sh
git commit -m 'Lesson 11 Example'
```
4. Push your changes to the remote workbook repository: 
```sh
git push origin main
```