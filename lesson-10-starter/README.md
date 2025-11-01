# Lesson 10 Starter

## Install dependencies and run the dev server

0. Extract the starter zip and rename the folder to `lesson-10`
1. Move into the lesson-10/ directory:
```sh
cd lesson-10
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

This lesson walks through working with forms: reading values, gathering checkbox/radio inputs, handling `submit` (preventing default navigation), and showing a structured summary of form data.

### Select required elements

````js
const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');
````

### Serialize form data (gather values)

````js
function serializeForm(formEl) {
	// Access inputs from form.elements
	const { fullName, email, bio } = formEl.elements;

	// Radio value
	const plan = formEl.elements.plan.value;

	// Checkboxes: gather checked values
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
````

### Handle form submission (prevent page reload)

````js
form.addEventListener('submit', (event) => {
	event.preventDefault(); // stop form from navigating/reloading

	const data = serializeForm(form);

	result.textContent = 
    `Submission received:
    - Name: ${data.fullName || '(none)'}
    - Email: ${data.email || '(none)'}
    - Skill: ${data.plan || '(none)'}
    - Strengths: ${data.topics.length ? data.topics.join(', ') : '(none)'}
    - Bio: ${data.bio || '(none)'}
    - Time: ${data.submittedAt}`;
});
````

### Handle form reset (clear result area)

````js
form.addEventListener('reset', () => {
	result.textContent = 'Awaiting submission...';
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
git commit -m 'Lesson 10 Example'
```
4. Push your changes to the remote workbook repository: 
```sh
git push origin main
```