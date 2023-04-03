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
	let bookIndex = getBookIndex(bookToRemove);
	myLibrary.splice(bookIndex, 1);
}

function changeReadStatus(bookToUpdate) {
	let bookIndex = getBookIndex(bookToUpdate);
	if (myLibrary[bookIndex].read == true) {
		myLibrary[bookIndex].read = false;
	} else {
		myLibrary[bookIndex].read = true;
	}
}

function getBookIndex(bookToFind) {
	return myLibrary.findIndex((book) => book.title === bookToFind);
}

export default {
	Book,
	addBookToLibrary,
	myLibrary,
	removeBookFromLibrary,
	changeReadStatus,
};
