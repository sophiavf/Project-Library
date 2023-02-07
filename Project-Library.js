let myLibrary = [];

// the constructor
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

const libraryDisplay = document.querySelector(".bookDisplay");

function displayBooks() {
	//Loops through books
	myLibrary.forEach((book) => {
		let newBookElement = document.createElement("div");
		newBookElement.innerHTML = `<p>${book.reportInfo()}</p>
		<div class="buttons"><button class='removeBookButton' data-key='${
			book.title
		}'>Remove</button>
		<button class='changeReadStatus' data-key='${book.title}'>${
			book.read
		} read</button></div>`;
		newBookElement.setClass("title");
		libraryDisplay.appendChild(newBookElement);
	});
	//Displays each book on the page
}

//1. 'NEW BOOK' button brings up a form allowing users to input the details for the new book: author, title, number of pages,whether it’s been read and anything else you might want.
const newBookButton = document.querySelector(".newBook");
const popUpForm = document.getElementById("popupForm");

("#newBook");
//2. Brings up form
newBookButton.addEventListener("click", function () {
	popUpForm.style.display = "block";
});

//3. tUser puts inputs into form
//4. User submits inputs
document
	.querySelector(".submitButton")
	.addEventListener("click", function (event) {
		event.preventDefault();
		getUserInput();
		closePopUp();
	});

function getUserInput() {}

document.querySelector(".closeButton").addEventListener("click", closePopUp());

function closePopUp() {
	popUpForm.style.display = "none";
}

//Removing a book
var removeBookButtons = document.querySelector(".removeBookButton");
if (removeBookButtons !== null) {
	removeBookButtons.forEach((button) => {
		button.addEventListener("click", () => {
			let bookToRemove = button.getAttribute("data-key").value;
			myLibrary.filter((book) => book.title !== bookToRemove);
			let removeElement = document.querySelector(`.${bookToRemove}`);
			removeElement.innerHTML = '';
			removeElement.remove(); 
		});
	});
}

//Changing

//testing
addBookToLibrary("Bible", "Joe", 267, "not");
displayBooks();
