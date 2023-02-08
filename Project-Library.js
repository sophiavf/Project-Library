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
	displayBooks;
}

const libraryDisplay = document.querySelector(".bookDisplay");

function displayBooks() {
	//Loops through books
	myLibrary.forEach((book) => {
		if (document.querySelector(`.${book.title}`) !== null) {
			return;
		} else {
			let newBookElement = document
				.createElement("div")
				.classList.add(`${book.title}`);
			let titleElement = (document.createElement("div").textContent =
				book.title);
			let authorElement = (document.createElement(
				"div"
			).textContent = `Written by ${book.author}`);
			let pageElement = (document.createElement(
				"div"
			).textContent = `${book.pages} pages`);
			let removeBookButton = document
				.createElement("button")
				.classList.add("removeBookButton");
			removeBookButton.setAttribute("id", `${book.title}`);
			let changeReadStatusButton = document
				.createElement("button")
				.classList.add("changeStatusButton")
				.setAttribute("id", `${book.title}`);

			newBookElement.append(
				titleElement,
				authorElement,
				pageElement,
				removeButton,
				changeReadStatusButton
			);
		}
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

//3. User puts inputs into form
//4. User submits inputs
document
	.querySelector(".submitButton")
	.addEventListener("click", function (event) {
		event.preventDefault();
		getUserInput();
		closePopUp();
	});
//5. Program takes user input from form and add's it to the library
function getUserInput() {
	let title = document.querySelector("#title");
	let author = document.querySelector("#author");
	let pages = document.querySelector("#pages");
	let read = document.querySelector("#read").value;
	if (read === true) {
		read = "yes";
	} else {
		read === "no";
	}
	addBookToLibrary(title, author, pages, read);
}

document.querySelector(".closeButton").addEventListener("click", closePopUp());

function closePopUp() {
	popUpForm.style.display = "none";
}

//Removing a book
var removeBookButtons = document.getElementsByClassName("removeBookButton");

if (removeBookButtons.length > 0) {
	removeBookButtons.forEach((button) => {
		button.addEventListener("click", () => {
			let bookToRemove = button.getAttribute("id").value;
			myLibrary.filter((book) => book.title !== bookToRemove);
			let removeElement = document.querySelector(`.${bookToRemove}`);
			removeElement.innerHTML = "";
			removeElement.remove();
		});
	});
}

//Changing the read status
let changeStatusButtons = document.getElementsByClassName("changeStatusButton");
if (changeStatusButtons.length > 0) {
	changeStatusButtons.forEach((button) => {
		button.addEventListener("click", function (e) {
			changeReadStatus(e);
		});
	});
}

function changeReadStatus(event) {
	let bookIndex = myLibrary.findIndex((book) => book.title === event.id.value);
	let updateElement = document.querySelector(
		`.changeStatusButton #${event.id.value}`
	);
	if (event.read == "yes") {
		myLibrary[bookIndex].read = "no";
	} else {
		myLibrary[bookIndex].read = "yes";
	}
}

//testing
addBookToLibrary("Bible", "Joe", 267, "not");
displayBooks();
