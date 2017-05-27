"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
//Generate Schema
const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
const Genre = mongoose.model('Genre', genreSchema);
// Get genres
function getGenres(callback, limit) {
    Genre.find(callback).limit(limit);
}
exports.getGenres = getGenres;
// Add genres
function addGenre(genre, callback) {
    Genre.create(genre, callback);
}
exports.addGenre = addGenre;
// Update genres
function updateGenre(id, genre, options, callback) {
    let query = { _id: id };
    let update = {
        name: genre.name
    };
    Genre.findOneAndUpdate(query, update, options, callback);
}
exports.updateGenre = updateGenre;
// Add genres
function deleteGenre(id, callback) {
    let query = { _id: id };
    Genre.remove(query, callback);
}
exports.deleteGenre = deleteGenre;
