'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Genre = require("./models/genres");
const Book = require("./models/book");
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
const url = process.env.MONGODB_URI || "mongodb://localhost";
//Connect to Mongoose
mongoose.connect(url + "/bookstore");
const db = mongoose.connection;
//Nowhere route
app.get("/", hello);
function hello(req, res) {
    res.send('Please use /api/books or /api/genre');
}
//Genres route
app.get('/api/genres', genres);
function genres(req, res) {
    Genre.getGenres(function (err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    });
}
app.post('/api/genres', postGenre);
function postGenre(req, res) {
    let genre = req.body;
    Genre.addGenre(genre, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
}
app.put('/api/genres/:_id', putGenre);
function putGenre(req, res) {
    let genre = req.body;
    let id = req.params._id;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
}
app.delete('/api/genres/:_id', deleteGenre);
function deleteGenre(req, res) {
    let id = req.params._id;
    Genre.deleteGenre(id, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
}
//Books route
app.get('/api/books', books);
function books(req, res) {
    Book.getBooks(function (err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    });
}
app.get('/api/books/:_id', booksid);
function booksid(req, res) {
    Book.getBookById(req.params._id, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
}
app.post('/api/books', postBook);
function postBook(req, res) {
    var book = req.body;
    Book.addBook(book, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
}
app.put('/api/books/:_id', putBook);
function putBook(req, res) {
    let book = req.body;
    let id = req.params._id;
    Book.updateBook(id, book, {}, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
}
app.delete('/api/books/:_id', deleteBook);
function deleteBook(req, res) {
    let id = req.params._id;
    Book.deleteBook(id, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
}
app.listen(process.env.PORT || 3000);
