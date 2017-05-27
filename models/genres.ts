import * as mongoose from "mongoose";

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
export function getGenres(callback: any, limit?: any) {
    Genre.find(callback).limit(limit);
}

// Add genres
export function addGenre(genre: any, callback: any) {
    Genre.create(genre, callback);
}

// Update genres
export function updateGenre(id: string, genre: any, options: any, callback: any) {
    let query = {_id: id};
    let update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

// Add genres
export function deleteGenre(id: any, callback: any) {
    let query = {_id: id};
    Genre.remove(query, callback);
}