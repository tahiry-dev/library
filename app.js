let myLibrary = [];
let id = 1;

function Book(author, title, page, id) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.id = id;
}

function addBook() {
    const book = new Book(document.getElementById("author").value, document.getElementById("title").value, document.getElementById("page").value, id);
    id++;
    myLibrary.push(book);
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("page").value = "";
}

function displayBooks() {
    let e = '';
    for (let i = 0; i < myLibrary.length; i++) {
        e += `
          <article class="book-card">
            <p><b>Author</b>: ${myLibrary[i].author}</p>
            <p><b>Title</b>: ${myLibrary[i].title} </p>
            <p><b>Page</b>: ${myLibrary[i].page} </p>
            <p>
              <button type="button" class="check">Mark as read </button>
            </p>
            <p>
              <button type="button" class="delete" onclick ="delete_book(${myLibrary[i].id})">Delete This Book</button>
            </p>
          </article>
          `;
    }

    document.getElementById('card').innerHTML = e;
}

function delete_book(id) {
    myLibrary = myLibrary.filter((book) => book.id !== id);
    displayBooks();
}