let myLibrary = [];

// the constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.reportInfo = function () {
		return `${title} by ${author}, ${pages}, ${read} read yet`;
	};
}

function addBookToLibrary(title, author, pages, read) {
	//4. store the new book objects into an array
	let book = new Book(title, author, pages, read);
	this.book = book;
	myLibrary.push(book);
}

const libraryDisplay = document.querySelector(".bookDisplay");

function displayBooks() {
	//Loops through books
	myLibrary.forEach((book) => {
		let newBookElement = document.createElement("div");
		newBookElement.innerHTML = `<p>${book.reportInfo()}</p>
		<button class='removeBookButton' data-key='${book.title}'>Remove</button>
		<button class='changeReadStatus' data-key='${book.title}'>${
			book.read
		} read</button>`;
		newBook.setAttribute("data-key", title);
		libraryDisplay.appendChild(newBookElement);
	});
	//Displays each book on the page
}

//1. 'NEW BOOK' button brings up a form allowing users to input the details for the new book: author, title, number of pages,whether it’s been read and anything else you might want.
const newBookButton = document.querySelector("#newBook");
newBookButton.addEventListener("click", function () {
	document.getElementById("popupForm").style.display = "block";
});

//2. Brings up form
//3. takes user’s input

//Removing a book
var removeBookButtons = document.querySelector(".removeBookButton");
if (removeBookButtons !== null) {
	removeBookButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const index = myLibrary.indexOf(button.data("value"));
			myLibrary = myLibrary.splice(index, 1);
		});
	});
}

//Changing
// if (removeBookButtons.length > 0)

//testing
addBookToLibrary("Bible", "Joe", 267, "not");
displayBooks();
