const express = require ('express');
const router = express.Router();
//define movies
// const movies =[
//     {
//         id : 1,
//         title : 'Avatar',
//         director : 'James Cameroon',
//         year : 2009,
//         genre : 'Scifi'
//     },
//     {
//         id : 2,
//         title : 'Oppenheimer',
//         director : 'Christopher Nolan',
//         year : 2023,
//         genre : 'history'
//     },
//     {
//         id : 3,
//         title : 'Jurassic Park',
//         director : 'Steven Spielberg',
//         year : 1993,
//         genre : 'Scifi'
//     },
//     {
//         id : 4,
//         title : 'Godzilla vs Kong',
//         director : 'Adam Wingard',
//         year : 2021,
//         genre : 'Scifi/Action'
//     },
//     {
//         id : 5,
//         title : 'King Kong',
//         director : 'Adam Wingard',
//         year : 2017,
//         genre : 'Scifi/Action'
//     }
// ]
//add movie
const Movie = require ('../models/Movie');

router.post('/',async(req,res)=>{
    // console.log(req.body);
    // movies.push(req.body);
    const movie = req.body;
    const dbMovie = await Movie.create(movie)
    res.send('Movie added successfully').status(200);
})
//get movies
router.get('/',async(req,res)=>{
    console.log('This is from Movies Route')
    const movies = await Movie.find();
    res.send(movies);
})
//get movie by Id
router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    // const filtered = movies.filter(movie=>movie.id==id);
    const filtered = await Movie.findById(id);
    res.send(filtered);
})
module.exports= router;