import "./styling.css";
import DomManipulation from "./modules/DomManipulation";
import Library from "./modules/Library";


Library.addBookToLibrary("Big", "New", 12, false);
Library.addBookToLibrary("Small", "New", 12, true);
Library.addBookToLibrary("Medium", "New", 12, false);

DomManipulation.initializeListeners();
DomManipulation.loadFooter();
DomManipulation.displayBooks(); 

