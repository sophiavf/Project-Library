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
	displayBooks();
}

const libraryDisplay = document.querySelector(".bookDisplay");

function displayBooks() {
	//Loops through books
	myLibrary.forEach((book) => {
		if (document.querySelector(`.${book.title}`) !== null) {
			return;
		} else {
			let newBookElement = document.createElement("div");
			newBookElement.classList.add(`${book.title}`, "bookContainer");
			let titleElement = (document.createElement("div").textContent =
				book.title);
			let authorElement = (document.createElement(
				"div"
			).textContent = ` written by ${book.author} `);
			let pageElement = (document.createElement(
				"div"
			).textContent = `containing ${book.pages} pages`);

			let readElement = document.createElement("div");
			readElement.classList.add(`${book.title}`, "readStatus");
			readElement.textContent = `Read: ${book.read}`;

			let removeBookButton = document.createElement("button");
			removeBookButton.classList.add(`${book.title}`, "removeBookButton");
			removeBookButton.textContent = "Remove book";

			let changeReadStatusButton = document.createElement("button");
			changeReadStatusButton.textContent = "Change read status";
			changeReadStatusButton.classList.add(
				"changeStatusButton",
				`${book.title}`
			);

			removeBookButton.setAttribute("id", `${book.title}`);
			changeReadStatusButton.setAttribute("id", `${book.title}`);

			let buttons = document.createElement("div");
			buttons.classList.add("buttons");

			buttons.append(removeBookButton, changeReadStatusButton);

			newBookElement.append(
				titleElement,
				authorElement,
				pageElement,
				readElement,
				buttons
			);
			//Displays each book on the page
			libraryDisplay.appendChild(newBookElement);
		}
	});
}

//1. 'NEW BOOK' button brings up a form allowing users to input the details for the new book: author, title, number of pages,whether it’s been read and anything else you might want.
const newBookButton = document.querySelector(".newBook");
const popUpForm = document.querySelector(".formPopup");

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
	let title = document.querySelector("#title").value;
	let author = document.querySelector("#author").value;
	let pages = document.querySelector("#pages").value;
	let read = document.querySelector("#read").checked;
	// if (read === true) {
	// 	read = "yes";
	// } else {
	// 	read === "no";
	// }
	addBookToLibrary(title, author, pages, read);
}

document
	.querySelector(".closeFormButton")
	.addEventListener("click", closePopUp);

function closePopUp() {
	popUpForm.style.display = "none";
}

//Removing a book
var removeBookButtons = document.getElementsByClassName("removeBookButton");

function removeBook(event) {
	let bookToRemove = event.target.id;
	myLibrary.filter((book) => book.title !== bookToRemove);
	let removeElement = document.querySelector(`.${bookToRemove}`);
	removeElement.innerHTML = "";
	removeElement.remove();
}

//Changing the read status

function changeReadStatus(event) {
	let bookIndex = myLibrary.findIndex((book) => book.title === event.target.id);
	let updateElement = document.querySelector(`.${event.target.id}.readStatus`);
	if (myLibrary[bookIndex].read == true) {
		myLibrary[bookIndex].read = false;
		updateElement.textContent = `read: ${myLibrary[bookIndex].read}`;
	} else {
		myLibrary[bookIndex].read = true;
		updateElement.textContent = `read: ${myLibrary[bookIndex].read}`;
	}
}

//read status & remove button

document.addEventListener("click", buttonListener);

function buttonListener(event) {
	var element = event.target;
	if (element.classList.contains("removeBookButton")) {
		removeBook(event);
	} else if (element.classList.contains("changeStatusButton")) {
		changeReadStatus(event);
	} else {
		return;
	}
}

//testing
addBookToLibrary("Bible", "Joe", 267, false);
