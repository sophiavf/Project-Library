let myLibrary = [];

function Book(title, author, pages, read) {
	// the constructor...
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.reportInfo = function () {
		return `${title} by $author}, ${pages}, ${read} read yet`;
	};
}

function addBookToLibrary(book) {
	//'NEW BOOK' button brings up a form allowing users to input the details for the new book: author, title, number of pages,whether it’s been read and anything else you might want.
	//take user’s input
	// store the new book objects into an array
	this.book = book;
	myLibrary.push(book);
}

function displayBooks() {
	//Loops through books
	//Displays each book on the page
}

const newBookButton = document.getElementsByClassName("newBook");
const removeBookButton = document.createElement("button.removeBook");

newBookButton.addEventListener;
