import * as mongoose from "mongoose"; 

//Generate Schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    image_url: {
        type: String
    },
    buy_url: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
    
});

const Book = mongoose.model('Book', bookSchema);

// Get books
export function getBooks(callback: any, limit?: any) {
    Book.find(callback).limit(limit);
}

// Get book by id
export function getBookById(id: string, callback: any) {
    Book.findById(id, callback);
}

// Add book
export function addBook(book: any, callback: any) {
    Book.create(book, callback);
}

//Update book
export function updateBook(id: string, book: any, options: any, callback: any) {
    let query = {_id: id};
    let update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
export function deleteBook(id: string, callback: any) {
    let query = {_id: id};
    Book.remove(query, callback);
}