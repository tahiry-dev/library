let myLibrary = []

function Book(author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
}


Book.prototype.addBookToLibrary = function () {

    let book_obj = {
        author: this.author,
        title: this.title,
        pages: this.pages
    }

    myLibrary.push(book_obj)
}


