class Book{
    constructor(title,author,publishYear) {
        this.title=title;
        this.author=author;
        this.publishYear=publishYear;
    }
}

//create a array to save books 
let libraryArray=[];

function addNewBook() {
    let bTitle = document.getElementById("title").value; 
    let bAuthor = document.getElementById("author").value; 
    let pubYear = document.getElementById("pubyear").value;

    //test 
    console.log(bTitle, bAuthor, pubYear);
    let confirmAdd = confirm("Do you want to register this book?");
    
    if (confirmAdd) {
        const newBook = new Book(bTitle, bAuthor, pubYear);
        libraryArray.push(newBook); // Adding the new book to the array

        // Display the new book in the list
        let bookList = document.getElementById("bookList");
        let listItem = document.createElement("li");
        listItem.textContent = `${newBook.title} by ${newBook.author} (${newBook.publishYear})`;
        bookList.appendChild(listItem);
    }
}
