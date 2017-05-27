"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
function getBooks(callback, limit) {
    Book.find(callback).limit(limit);
}
exports.getBooks = getBooks;
// Get book by id
function getBookById(id, callback) {
    Book.findById(id, callback);
}
exports.getBookById = getBookById;
// Add book
function addBook(book, callback) {
    Book.create(book, callback);
}
exports.addBook = addBook;
//Update book
function updateBook(id, book, options, callback) {
    let query = { _id: id };
    let update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    };
    Book.findOneAndUpdate(query, update, options, callback);
}
exports.updateBook = updateBook;
// Delete Book
function deleteBook(id, callback) {
    let query = { _id: id };
    Book.remove(query, callback);
}
exports.deleteBook = deleteBook;
