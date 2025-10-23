import { fetchData, postData } from './utils';

const loadButton = document.getElementById('loadBooks');
const addForm = document.getElementById('addBook');
const list = document.getElementById('bookList');
const endpoint = 'http://localhost:3000/books';

async function loadHandler() {
  list.innerHTML = '<li>Loading...</li>';

  loadButton.disabled = true;
  try {
    const books = await fetchData(endpoint);

    // Simulate a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 2000));

    list.innerHTML = '';

    books.forEach((book) => {
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}`;
      list.appendChild(li);
    });
  } catch (error) {
    console.error(error);
    list.innerHTML = `<li style="color:red;">Error: ${error.message}</li>`;
  } finally {
    loadButton.disabled = false;
  }
}

async function submitHandler(e) {
  e.preventDefault(); // never reload the page
  const form = e.target;
  const formData = new FormData(form);

  const title = (formData.get('title') || '').trim();
  const author = (formData.get('author') || '').trim();

  if (!title || !author) {
    console.error('Validation error. Please provide both title and author:', {
      title,
      author,
    });
    // TODO: Display a better error for the user
    return;
  }

  const data = Object.fromEntries(formData.entries());
  data['year'] = Number(data.year); // convert year to number

  try {
    await postData(endpoint, data);

    // Call loadHandler to refresh the list
    await loadHandler();
    // Reset the form
    form.reset();
  } catch (error) {
    // TODO: Display a better error for the user
    console.error('Error submitting form:', error);
  }
}

loadButton.addEventListener('click', loadHandler);
addForm.addEventListener('submit', submitHandler);
