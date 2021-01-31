let myLibrary = []
let i = 0;

function Book(author, title, page) {
    this.author = author
    this.title = title
    this.page = page
}

function getObject() {
    myLibrary[i] = new Book(document.getElementById("author").value, document.getElementById("title").value, document.getElementById("page").value)
    i++;
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("page").value = "";
}

function display_object() {
    let e = "";
    for (i = 0; i < myLibrary.length; i++) {
        e += '<div class= "book-card">';
        e += "<p><b>Author</b>: " + myLibrary[i].author + '</p>';
        e += "<p><b>Title</b>: " + myLibrary[i].title + '</p>';
        e += "<p><b>Page</b>: " + myLibrary[i].page; + '</p>';
        e += '<p><button type="button" class="check">Mark as read </button> </p>';
        e += '<p><button type="button" class="delete" onclick = "delete_book();" >Delete This Book </button> </p>'
        e += '</div>';
    }

    document.getElementById("card").innerHTML = e;
}

function delete_book() {
    let to_delete = document.querySelector(".book-card");
    to_delete.remove();
}