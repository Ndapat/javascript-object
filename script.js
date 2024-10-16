let library = [];

function addBook(title, author, year, genre){
    const book = {
        title: 'myPoetry',
        author: 'Patience',
        year: 2024,
        genre: 'Scifi'
    };
    library.push(book);
    console.log(`Book added: ${title}`);
}

function displayBooks(){
    if (library.length === 0) {
        console.log("No books in the library.");
        return;
    }
    library.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} by ${book.author} (${book.year}) - Genre: ${book.genre}`);

    });
}

function searcBook(query) {
    const lowerQuery = quer.toLowerCase();
    const results = library.filther(book => book.title.toLowerCase(). includes(lowerQuery)
    || book.author.toLowerCase(). includes(lowerQuery)
    );
    if (results.length > 0){
        console.log("Search Results:");
        results.forEach((book, index) => {
            console.log(`${index + 1} . ${bool.title} by ${book.author} (${book.year}) - Genre: ${book.genre}`);
        });
    } else {
        console.log("No books found.")
    }
}

function removeBook(title) {
    const index = library.findIndex(book => book.title.toLowerCase() === title.toLowerCase());

    if (index !== -1) {
        console.log(`Book removed: ${library[index].title}`);
        library.splice(index, 1);
    } else {
        console.log("Book not found.");
    }
}

function saveLibraryToLocalStorage() {
    localStorage.setItem('library', JSON.stringify(library));
    console.log("Library saved to storage.")
}

function loadLibraryFromLocalStorage() {
    const storedLibrary = localStorage.getItem('library');
    if (storedLibrary) {
        library = JSON.parse(storedLibrary);
        console.log("Library loaded from local storage.");
    } else {
        console.log("No saved library found.")
    }
}