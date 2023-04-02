import Library from "./Library";
// import formValidation from "../utils/formValidation";

const libraryDisplay = document.querySelector(".bookDisplay");
//1. The'NEW BOOK' button brings up a form allowing users to input the details for the new book: author, title, number of pages,whether it’s been read and anything else you might want.
const newBookButton = document.querySelector(".newBook");
const popUpForm = document.querySelector(".formPopup");
//const submitButton = document.querySelector(".submitButton");
const form = document.querySelector("form");
const bodyTag = document.querySelector("body");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

function initializeListeners() {
	//2. Brings up form
	newBookButton.addEventListener("click", function () {
		popUpForm.style.display = "block";
	});
	//3. User puts inputs into form
	//4. User submits inputs
	form.addEventListener("submit", function () {
		getUserInput();
		closePopUp();
	});
}

function loadFooter() {
	const currentYear = new Date().getFullYear();
	const footer = document.createElement("footer");
	const footerContent = document.createElement("div");
	footerContent.innerHTML = `Author: Sophia <a href="https://github.com/sophiavf">GitHub</a> &copy ${currentYear}`;
	footer.appendChild(footerContent);
	bodyTag.append(footer);
}

function displayBooks() {
	libraryDisplay.innerHTML = "";
	//Loops through books
	Library.myLibrary.forEach((book) => {
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

			// let readElement = document.createElement("div");
			// readElement.classList.add(`${book.title}`, "readStatus");
			// readElement.textContent = `Read: ${book.read}`;

			let removeBookButton = document.createElement("button");
			removeBookButton.classList.add(`${book.title}`, "removeBookButton");
			removeBookButton.innerHTML =
				'<span class="material-symbols-outlined">delete</span>Remove book';

			let changeReadStatusButton = document.createElement("label");
			changeReadStatusButton.classList.add(
				"changeStatusButton",
				`${book.title}`,
				"toggle"
			);
			changeReadStatusButton.innerHTML =
				'Read: <input id="readToggle" type="checkbox"><span class="slider round"></span>';

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
			checkBoxConfig(`${book.title}`, book);
		}
	});
}

function checkBoxConfig(bookTitle, book) {
	const bookReadToggle = document.querySelector(
		`.changeStatusButton.${bookTitle}`
	);
	if (book.read === true) {
		bookReadToggle.checked = true; 
	} else {
		bookReadToggle.checked = false; 
	}
}

//5. Program takes user input from form and add's it to the library
function getUserInput() {
	Library.addBookToLibrary(
		title.value,
		author.value,
		pages.value,
		read.checked
	);
	displayBooks();
}

document
	.querySelector(".closeFormButton")
	.addEventListener("click", closePopUp);

function closePopUp() {
	popUpForm.style.display = "none";
}

function removeBook(event) {
	let bookToRemove = event.target.id;
	Library.removeBookFromLibrary(bookToRemove);
	displayBooks();
}

//Changing the read status
function changeReadStatus(event) {
	let bookToUpdate = event.target.id;
	Library.changeReadStatus(bookToUpdate);
	displayBooks();
}

//Read status & remove button

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

//Custom validationMessages
//Title
title.addEventListener("input", (event) => {
	if (title.checkValidity()) {
		title.setCustomValidity("");
	} else {
		title.setCustomValidity("Please provide a book title");
	}
});
//Author
author.addEventListener("input", (event) => {
	if (author.checkValidity()) {
		author.setCustomValidity("");
	} else {
		author.setCustomValidity("Please provide a book author");
	}
});
//Pages
pages.addEventListener("input", (event) => {
	if (pages.checkValidity()) {
		pages.setCustomValidity("");
	} else {
		pages.setCustomValidity("Please provide the number of pages");
	}
});

export default { initializeListeners, loadFooter };
