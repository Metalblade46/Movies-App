const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
        id : Number,
        title : String,
        director : String,
        year : Number,
        genre : String,
});

 const Movie = mongoose.model('Movie',movieSchema);
 module.exports = Movie;

