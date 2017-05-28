'use strict';
import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as Genre from "./models/genres"
import * as Book from "./models/book"
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
const url: string = process.env.MONGODB_URI || "mongodb://localhost";

//Connect to Mongoose
mongoose.connect(url + "/bookstore");
const db = mongoose.connection;


//Nowhere route
app.get("/", hello);
function hello(req: any, res: any) {
    res.send('Please use /api/books or /api/genre');
}

//Genres route
app.get('/api/genres', genres);
function genres(req: any, res: any) {
    Genre.getGenres(function(err: any, genres: any){
        if (err) {
            throw err;
        }
        res.json(genres);
    })
}
app.post('/api/genres', postGenre);
function postGenre(req: any, res: any) {
    let genre = req.body;
    Genre.addGenre(genre, function(err: any, genre: any){
        if (err) {
            throw err;
        }
        res.json(genre);
    })
}
app.put('/api/genres/:_id', putGenre);
function putGenre(req: any, res: any) {
    let genre = req.body;
    let id = req.params._id
    Genre.updateGenre(id, genre, {}, function(err: any, genre: any){
        if (err) {
            throw err;
        }
        res.json(genre);
    })
}
app.delete('/api/genres/:_id', deleteGenre);
function deleteGenre(req: any, res: any) {
    let id = req.params._id
    Genre.deleteGenre(id, function(err: any, genre: any){
        if (err) {
            throw err;
        }
        res.json(genre);
    })
}


//Books route
app.get('/api/books', books);
function books(req: any, res: any) {
    Book.getBooks(function(err: any, books: any){
        if (err) {
            throw err;
        }
        res.json(books);
    })
}

app.get('/api/books/:_id', booksid);
function booksid(req: any, res: any) {
    Book.getBookById(req.params._id, function(err: any, book: any){
        if (err) {
            throw err;
        }
        res.json(book);
    })
}
app.post('/api/books', postBook);
function postBook(req: any, res: any) {
    var book = req.body;
    Book.addBook(book, function(err: any, book: any){
        if (err) {
            throw err;
        }
        res.json(book);
    })
}
app.put('/api/books/:_id', putBook);
function putBook(req: any, res: any) {
    let book = req.body;
    let id = req.params._id
    Book.updateBook(id, book, {}, function(err: any, book: any){
        if (err) {
            throw err;
        }
        res.json(book);
    })
}

app.delete('/api/books/:_id', deleteBook);
function deleteBook(req: any, res: any) {
    let id = req.params._id
    Book.deleteBook(id, function(err: any, book: any){
        if (err) {
            throw err;
        }
        res.json(book);
    })
}

app.listen(process.env.PORT || 3000);