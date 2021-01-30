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
    let e = " ";
    let target = document.getElementById("list-container");
    myLibrary.forEach(element => {
        for (let keys in element) {
            e += (`<p><b>${keys} :</b> ${element[keys]} </p>`);
        }

    })

    target.innerHTML = e;
}
