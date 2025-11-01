# Lesson 01 Starter

1. Open `index.html` in your browser.
2. You should see a heading and no console errors.
3. Your instructor will use this file as the base for today's example.

## What HTML is and how the browser renders it

HTML (HyperText Markup Language) is the language used to describe the structure and meaning of web content — headings, paragraphs, images, lists, and so on. It tells the browser "what" the content is (not "how" it should look). CSS (styles) controls presentation, and JavaScript controls behavior and interactivity.

How browsers render a page (high level):

- Network and parsing: The browser requests the HTML file and begins parsing it top-to-bottom.
- DOM creation: As the parser reads HTML it builds the Document Object Model (DOM) — a tree representation of elements the browser can work with.
- CSSOM and render tree: The browser also builds a CSSOM (from stylesheets and style rules). The DOM + CSSOM combine into a render tree that determines what is visible and how it should be styled.
- Layout and paint: The browser calculates layout (sizes and positions) and then paints pixels to the screen.
- JavaScript and updates: JavaScript can read and modify the DOM and styles at runtime—this may cause the browser to recalculate layout or repaint (you'll hear terms like "reflow" or "repaint").

You don't need to memorize every step now — the key idea is that HTML declares structure, the browser turns that into a DOM, styles affect appearance, and JavaScript can change the DOM after the page loads. Use DevTools (Inspect) to see the live DOM and style rules while you experiment.

## HTML document structure

Open the `index.html` file in VS Code. You should see the following:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Lesson 01 Starter</title>
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/script.js" defer></script>
</head>

<body>
  <h1>Lesson 01: Introduction to Front-End Development</h1>
</body>

</html>
```

## Basics of an HTML document

This may be the first time you're reading an HTML document.

- Doctype and root: The first line (`<!DOCTYPE html>`) tells the browser to render the page as HTML5. The whole document is wrapped in an `html` **element** using `<html>` and `</html>` **tags**. Because the `html` element is the first wrapping element in the document, it is referred to as the **root element**.
- Language and metadata: The `<head>` contains metadata such as the document character set (`<meta charset="UTF-8">`), the page `<title>`, and links to stylesheets or scripts. Metadata doesn't appear directly in the page body but influences how the page is displayed or behaves.
- Content vs. configuration: The `<body>` contains visible content (headings, paragraphs, images). The `<head>` configures the document (styles, scripts, metadata).
- Linking resources: Stylesheets are usually linked with `<link rel="stylesheet" href="...">` and scripts with `<script src="..." defer></script>`; the `defer` **attribute** ensures scripts run after the document is parsed.
- Elements and tags: HTML is made of elements with opening and closing tags (e.g., `<p>...</p>`). Some elements are self-closing (e.g., `<img>` or `<img />`).
- Semantic structure: Use semantic elements where possible (e.g., `<header>`, `<main>`, `<footer>`) to make content meaningful and accessible.
- Indentation and readability: Keep markup indented and organized so it's easy to read and maintain.

You'll be working directly with these parts of the document in class. The next exercises will show how JavaScript and CSS connect to this structure.

## HTML elements

There are many elements defined in the HTML specification. You can learn more about them on the MDN site [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements). Update the `index.html` with some custom content of your own. Common elements to explore (try adding these to `index.html`):

- Headings: `<h1>` through `<h6>`
  - used for section titles; `<h1>` is the main page heading
- Paragraphs: `<p>`
  - regular text content
- Links: `<a href="...">`
  - create clickable links to other pages or resources
  - the `href` attribute can link to another location in the current document, it can be a relative file link, or even link to another resource or website
- Images: `<img src="..." alt="...">`
  - display images; always include an `alt` attribute to describe the image
  - the `src` attribute can be a relative link to an image file, or a link to a remote image
- Lists: `<ul>` and `<ol>` with `<li>` for items
  - unordered and ordered lists, respectively, for grouping items
  - each type of list can contain many items
- Buttons: `<button>`
  - interactive buttons that users can click
- Containers: `<div>` and `<span>`
  - generic elements used to group or wrap content for styling or scripting
- Semantic sections: `<header>`, `<main>`, `<footer>`, `<section>`
  - structure your page for readability and accessibility
- Emphasis/strong: `<em>` and `<strong>`
  - indicate emphasized or important text

Try editing or adding one of the items above, save `index.html`, then refresh the browser to see the result. Use the browser DevTools (right-click anywher on the web page and then select the 'Inspect' option) to view the HTML and experiment with temporary edits.

## Styling a webpage

[CSS (Cascading Style Sheets)](https://developer.mozilla.org/en-US/docs/Web/CSS) controls how the HTML content looks. Here are the common ways to add CSS and when to use them:

- Inline styles: add a `style` attribute directly to an element, for example `<h1 style="color: blue">`. Good for quick tests or one-off adjustments, but hard to maintain for larger projects.
- Internal styles: include a `<style>` block inside the `<head>` of the HTML document. Handy for small demos or when you want styles close to the document during lessons.
- External stylesheet: place CSS in a separate file (e.g., `css/styles.css`) and link it with `<link rel="stylesheet" href="css/styles.css">`. This is the preferred approach for projects — it separates structure (HTML) from presentation (CSS) and allows reuse across pages.

Basic CSS snippets to try (put these in `css/styles.css` or inside a `<style>` block):

```css
/* Page defaults */
body {
  font-family: 'Helvetica', Arial, sans-serif;
  line-height: 1.5;
  margin: 0;
  padding: 1rem;
  background: #f7f9fc;
  color: #111;
}

/* Headings */
h1 {
  color: #0b5fff;
  margin-bottom: 0.5rem;
}

/* Simple container */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

/* Responsive images */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Basic button */
.btn {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: #0b5fff;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
```

## Student exercise

Complete the following tasks to get comfortable editing HTML and CSS:

1. Open `index.html` in your editor.
2. Wrap the existing `<h1>` in a `<div class="container">`.
3. Add a new paragraph under the heading: `<p>Hello! I edited this file.</p>`.
4. Add a button below the paragraph: `<button class="btn">Click me</button>`.

Save the file and refresh the browser. Success criteria:

- The paragraph appears under the heading.
- The button shows the styles from `.btn` (blue background, white text).
- If something doesn't look right, open DevTools (Inspect) and check the Elements and Styles panels to see which rules apply.

Challenge: Try changing the button text in DevTools to see how live edits work without saving the file.