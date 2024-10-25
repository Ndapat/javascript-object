let Booklibrary = [];

function addBook(title, author, year, genre){
    const book = {
        title: 'myPoetry',
        author: 'Patience',
        year: 2024,
        genre: 'Scifi'
    };
   Booklibrary.push(book);
    console.log(`Book added: ${title}`);
}

function displayBooks(){
    if (library.length === 0) {
        console.log("Empty library!.");
        return;
    }
    library.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} by ${book.author} (${book.year}) - Genre: ${book.genre}`);

    });
}

function findBook(query) {
    const lowerQuery = query.toLowerCase();
    const results = Booklibrary.filther(book => book.title.toLowerCase(). includes(lowerQuery)
    || book.author.toLowerCase(). includes(lowerQuery)
    );
    if (results.length > 0){
        console.log("Search Results:");
        results.forEach((book, index) => {
            console.log(`${index + 1} . ${book.title} by ${book.author} (${book.year}) - Genre: ${book.genre}`);
        });
    } else {
        console.log("No books found.")
    }
}

function removeBook(title) {
    const index = library.findIndex(book => book.title.toLowerCase() === title.toLowerCase());

    if (index !== -1) {
        console.log(`Book removed: ${Booklibrary[index].title}`);
        Booklibrary.splice(index, 1);
    } else {
        console.log("Book not found.");
    }
}

function saveToStorage() {
    localStorage.setItem('library', JSON.stringify(Booklibrary));
    console.log("Library saved to storage.")
}

function loadStorage() {
    const storedLibrary = localStorage.getItem('library');
    if (storedLibrary) {
        Booklibrary = JSON.parse(storedLibrary);
        console.log("Library loaded from local storage.");
    } else {
        console.log("No saved library found.")
    }
}
