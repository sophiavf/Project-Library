import Library from "./Library";
// import formValidation from "../utils/formValidation";

const libraryDisplay = document.querySelector(".bookDisplay");
//1. The'NEW BOOK' button brings up a form allowing users to input the details for the new book: author, title, number of pages,whether it’s been read and anything else you might want.
const newBookButton = document.querySelector(".newBook");
const popUpForm = document.querySelector(".formPopup");
const submitButton = document.querySelector(".submitButton");
const bodyTag = document.querySelector("body");

function initializeListeners() {
	//2. Brings up form
	newBookButton.addEventListener("click", function () {
		popUpForm.style.display = "block";
	});
	//3. User puts inputs into form
	//4. User submits inputs
	submitButton.addEventListener("click", function (event) {
		event.preventDefault();
		getUserInput();
		closePopUp();
	});
}

function loadFooter() {
	const currentYear = new Date().getFullYear();
	const footer =  document.createElement("footer");
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

//5. Program takes user input from form and add's it to the library
function getUserInput() {
	let title = document.querySelector("#title").value;
	let author = document.querySelector("#author").value;
	let pages = document.querySelector("#pages").value;
	let read = document.querySelector("#read").checked;
	Library.addBookToLibrary(title, author, pages, read);
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

//Form validation logic

function checkFormInput () {
	if ()
}

export default { initializeListeners, loadFooter };
