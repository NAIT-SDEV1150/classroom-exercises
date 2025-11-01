# Lesson 02 Starter

## The World Wide Web - How web pages are served

When you open a web page, your browser (the client) asks a server for the files that make up that page. The following is a short summary of what the process entails:

- URL and DNS: You type a URL (for example, `https://www.nait.ca`) into the browser's address bar. The Domain Name System (DNS) translates the human-readable name into an IP address for a server on the internet.
- Request and response: The browser sends an HTTP(S) request to that server asking for the page. The server responds with the HTML document (and often links to CSS, JavaScript, and images).
- Static vs dynamic: Some servers return static files (the same file every time). Others run code (on the server) to build a response dynamically before sending it back.
- Assets and dependencies: The initial HTML often references CSS and JS files; the browser requests those too and applies styles and scripts to render the page.
- Dev vs production: During development you usually run a local dev server (e.g., Vite) at `localhost` to preview changes quickly. Production sites are deployed to hosting services so they’re reachable by anyone on the Internet.
- HTTPS and security: Most sites use HTTPS — this encrypts data between the browser and the server so that requests and responses are private and tamper-resistant.

Why this matters for you as a front-end developer:

- You edit HTML/CSS/JS locally and test on a dev server (like Vite) before deploying.
- Knowing the request/response flow helps you debug missing assets, 404 errors, or caching issues.

## Node.js

The build tools we will use in this course rely on [Node.js](https://nodejs.org/en). Visit the Node.js site and download and install Node on your machine.

## Vite

[Vite](https://vite.dev/) is a frontend build tool used for building web applications. We will use it provide a development server for our local work.

Create a new project using the following command:

```sh
npm create vite@latest
```

Or, you can skip some configuration steps with the following:

```sh
npm create vite@latest lesson-02 -- --template vanilla
```

## Install dependencies and run the dev server

1. Move into the lesson-02/ directory:
```sh
cd lesson-02
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
5. You should see the default webpage for the vite project.
6. Use this as the base for today's examples.

## Fast Refresh and Hot Module Replacement (HMR)

Vite provides both fast refresh and hot module replacement (HMR), which enables us to develop without having to manually refresh the browser to see our updates. With both your browser and VS Code visible, make an update to the `index.html` page and save your changes. You should see the page automatically update in the browser. Once we begin writing JavaScript, we will see that those updates are also automatically updated in the browser.

You will also notice that the script tag is a little different from the previous lesson. Specifically, that the `defer` attribute has been replaced by a `type="module"` attribute. This is necessary to support ES Module loading and HMR in Vite. The effect on script loading is the same.

## Git

[Git](https://git-scm.com/) is a distributed version control system (DVCS). We will be using it to help us with our development and as a means to backup and share our work.

Visit the Git website and install git on your machine.

## GitHub

Sign up for a [GitHub](https://github.com/) account, if you haven't already done so, and sign in.

Follow the workbook link provided by your instructor and accept the assignment.

Clone your workbook repository to your machine and open the new repository directory in VS Code.

## Push to your GitHub workbook repo

Once you're done making your own custom updates to the project, stage your files, commit your work, and push to the remote repository.

1. Open a terminal in VS Code
2. Stage all updated and created files:
```sh
git add .
```
3. Commit the changes:
```sh
git commit -m 'Lesson 02 first commit'
```
4. Push your changes to the remote workbook repository: 
```sh
git push origin main
```