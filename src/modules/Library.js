let myLibrary = [];

// the book constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.reportInfo = function () {
		return `${title} by ${author}, ${pages} pages, ${read} read yet`;
	};
}

function addBookToLibrary(title, author, pages, read) {
	//4. store the new book objects into an array
	let book = new Book(title, author, pages, read);
	this.book = book;
	myLibrary.push(book);
}

function removeBookFromLibrary(bookToRemove) {
	myLibrary.filter((book) => book.title !== bookToRemove);
}

function changeReadStatus(bookToUpdate) {
	let bookIndex = myLibrary.findIndex((book) => book.title === bookToUpdate);
	if (myLibrary[bookIndex].read == true) {
		myLibrary[bookIndex].read = false;
	} else {
		myLibrary[bookIndex].read = true;
	}
}

export default {
	Book,
	addBookToLibrary,
	myLibrary,
	removeBookFromLibrary,
	changeReadStatus,
};
