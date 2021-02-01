let myLibrary = [];
let id = 1;

function Book(author, title, page, id) {
  this.author = author;
  this.title = title;
  this.page = page;
  this.id = id;
}

function addBook() { // eslint-disable-line no-unused-vars
  const book = new Book(document.getElementById('author').value, document.getElementById('title').value, document.getElementById('page').value, id);
  id += 1;
  myLibrary.push(book);
  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('page').value = ''; // still raises defined but never used
}

function displayBooks() {
  let e = '';

  for (let i = 0; i < myLibrary.length; i += 1) {
    e += `
          <article class="book-card">
            <p><b>Author</b>: ${myLibrary[i].author}</p>
            <p><b>Title</b>: ${myLibrary[i].title} </p>
            <p><b>Page</b>: ${myLibrary[i].page} </p>
            <p>
              <button type="button" class="check">Mark as read </button>
            </p>
            <p>
              <button type="button" class="delete" onclick ="deleteBook(${myLibrary[i].id})">Delete This Book</button>
            </p>
          </article>
          `;
  }

  document.getElementById('card').innerHTML = e;
}

function deleteBook(id) { // eslint-disable-line no-unused-vars
  myLibrary = myLibrary.filter((book) => book.id !== id);
  displayBooks(); // still raises defined but never used
}