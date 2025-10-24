# Lesson 20 Starter

## Install dependencies and run the dev server

0. Extract the starter zip and rename the folder to `lesson-20`
1. Move into the lesson-20/ directory:
```sh
cd lesson-20
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

## Instructor Demo

### Component Element CSS Overrides

In `index.html`, update the markup for the first web component to include inline CSS styling. Add a `<span>` with a `style` attribute to the component:

```html
<user-card avatar="assets/zelda-avatar.png">
   <span slot="name"><span style="color:gold">Zelda</span></span>
   <span slot="description">Princess of Hyrule</span>
</user-card>
```

> NOTE: that the inline CSS is applied to the individual component's name slot. It's important to note that styles applied this way will also take precedence over any scoped CSS set inside the web component (demonstrated later on).

### Scoped CSS Variables

We can utilize scoped CSS variables to make updating the components CSS easier. Add the `:host` selector rule to the style for the user card component (there are a few more updates added from the previous lesson):

```css
<style>
  :host {
    --card-bg: #ffffff;
    --card-color: #222222;
    --card-accent: #0077ff;
    display: block;
  }
  .card {
    background: var(--card-bg);
    color: var(--card-color);
    border: 1px solid #e6e6e6;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    gap: 12px;
    align-items: center;
    width: 320px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  }
  .name {
    color: var(--card-accent);
    display: block;
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
  }
  .description {
    font-size: 0.9rem;
    color: #666;
    display: block;
    margin-top: 4px;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    flex: 0 0 80px;
  }
</style>
```

The CSS variables defined in the `:host` can be applied in other rulesets (e.g., `.card` and `.name` make use of the variables).

### Expose CSS Vars for Global Styling

Components can be styled from outside the component as well by exposing CSS vars. To demonstrate, we'll expose three global CSS vars that can be used to override the three variable values set in the previous section:

```css
<style>
  :host {
    --card-bg: var(--global-card-bg, #ffffff);
    --card-color: var(--global-card-color, #222222);
    --card-accent: var(--global-card-accent, #0077ff);
    display: block;
  }
  ...
</style>
```

Add a toggle button to the app to quickly test the application of these new global CSS vars:

```js
// main.js
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle theme';
document.body.prepend(toggleBtn);

let dark = false;
toggleBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.style.setProperty('--global-card-bg', dark ? '#1f2937' : '#ffffff');
  document.documentElement.style.setProperty('--global-card-color', dark ? '#e5e7eb' : '#222222');
  document.documentElement.style.setProperty('--global-card-accent', dark ? 'gold' : '#0077ff');
});
```

The handler for the button will add/modify the global CSS vars on the document with values to demonstrate how they can be used within the web component.

### Handle Attribute Updates (A Look Ahead)

The work last day left us with a strange situation (well, strange until we unpack it). When creating the second `<user-card>` programatically, we found that the custom placeholder colour was unchanged (i.e., it was still the default). This is because the element was created first, which called the constructor, and then the avatar attribute was altered afterwards, which has no effect. To respond to attribute *changes*, we need to add a callback handler to the web component:

```js
// user-card.js

class UserCard extends HTMLElement {
  constructor() {
    ...
  }

  // Respond to attribute changes if needed in the future
  // The upcoming lessons will cover component lifecycle and state management in more detail
  static get observedAttributes() {
    return ['avatar'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'avatar' && this.shadowRoot) {
      const img = this.shadowRoot.querySelector('img');
      if (img) {
        img.src = newValue;
      }
    }
  }
}

```

Now that we have defined the observed attributes (which to watch) and an attribute handler, we can update the component when the avatar attribute is changed. You should now see that the placeholder colour updates as expected.

## Student Exercise

### Allow for Additional Global Styling
- Add a CSS var to control the description colour for dark mode
- Expose a `theme` attribute on `<user-card>` that toggles a small internal dark-mode class. (Refer to the demonstrated `attributeChangedCallback` for the `avatar` attribute to make this update).

## Common Errors & Fixes

| Issue | Cause | Solution |
|-------|-------|----------|
| Styles not applied | `<style>` not inside template or shadow root | Move scoped styles into the template appended to shadow root.<br>Use Elements panel to inspect the component's shadow root to see applied CSS. |
| Slots empty | Slot name mismatch | Match slot="name" with <slot name="name"> exactly |
| Avatar missing for programmatic element | Attribute set after construction and constructor uses it | Set attributes before appending or handle in connectedCallback / attributeChangedCallback |

## Push to Your GitHub Workbook Repo

Once you're done making your own custom updates to the project, stage your files, commit your work, and push to the remote repository.

1. Open a terminal in VS Code
2. Stage all updated and created files:
```sh
git add .
```
3. Commit the changes:
```sh
git commit -m 'Lesson 20 Example'
```
4. Push your changes to the remote workbook repository: 
```sh
git push origin main
```

# Lesson 20 Starter

## In-class Example Walkthrough — Lesson 20

Goal: demonstrate styling a web component using Shadow DOM and CSS custom properties, then add a small theme toggle to show dynamic styling.

Duration: 20–30 minutes

1. Quick setup (2 min)
   - Ensure the dev server is running:
     ```sh
     npm install
     npm run dev
     ```
   - Open the app URL from Vite in the browser.

2. Review the existing component (3 min)
   - Open src/user-card.js and note:
     - The template includes a <style> block inside the component.
     - The template is cloned into the component's shadow root.
     - The component reads an avatar attribute for the image src.

3. Live edit — expose CSS custom properties (7 min)
   - Explain why we use CSS variables: allow page-level customization without breaking encapsulation.
   - In README show an example snippet to update the component's style block (insert inside the template in src/user-card.js):

     ```js
     // Example snippet to add to the template's <style> in src/user-card.js
     :host {
       --card-bg: #ffffff;
       --card-color: #222222;
       --card-accent: #0077ff;
       display: block;
     }
     .card {
       background: var(--card-bg);
       color: var(--card-color);
       border: 1px solid rgba(0,0,0,0.06);
     }
     .name { color: var(--card-accent); }
     ```

   - Save and show how changing the variables on the host element (or body) updates the component look.

4. Live edit — dynamic theme toggle (8 min)
   - Add a simple toggle in src/main.js to switch between light/dark theme by setting CSS variables on document.documentElement or on a wrapper element:

     ```js
     const toggleBtn = document.createElement('button');
     toggleBtn.textContent = 'Toggle theme';
     document.body.prepend(toggleBtn);
 
     let dark = false;
     toggleBtn.addEventListener('click', () => {
       dark = !dark;
       document.documentElement.style.setProperty('--global-card-bg', dark ? '#1f2937' : '#ffffff');
       document.documentElement.style.setProperty('--global-card-color', dark ? '#e5e7eb' : '#222222');
       document.documentElement.style.setProperty('--global-card-accent', dark ? 'gold' : '#0077ff');
     });
     ```

   - Demonstrate clicking the toggle and point out:
     - Shadow DOM styles read the variables from the cascade.
     - The component stays encapsulated but is themeable.

5. Debugging tips (2 min)
   - If styles don't appear:
     - Confirm <style> is inside the template that's appended to the shadow root (styles outside won't scope).
     - Use Elements panel → inspect the component's shadow root to see applied CSS.
   - If slots are empty:
     - Match slot="name" and <slot name="name"> exactly.
   - If avatar image missing for programmatic element:
     - Ensure attribute is set before or re-render inside connectedCallback; attributes added after construction won't affect an already-cloned template unless handled.

6. Extension challenge / student exercise (5 min)
   - Add CSS var to control the description colour for dark mode
   - Expose a `theme` attribute on <user-card> that toggles a small internal dark-mode class (demonstrated attributeChangedCallback for the `avatar` attribute).

References
- MDN: Using the Shadow DOM — https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
- MDN: Using templates and slots — https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots

}