const list = document.querySelector('#book-list')
const form = document.querySelector('#book-form')


// Book class 
class Book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}
// UI class
class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'Alex',
                isbn: '33532'
            },
            {
                title: 'Book two',
                author: 'Samsonica',
                isbn: '33323532'
            },
        ]
        
        const books = StoredBooks
       
        books.forEach((book) =>UI.addBookToList(book))
        

    }

    static addBookToList(book){
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `

        list.appendChild(row)
    }

}



// Storage class

// Event: display books

document.addEventListener('DOMContentLoaded', ()=> UI.displayBooks())

// Event: add d book
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn)
    UI.addBookToList(book)
})

// Event: remove a book