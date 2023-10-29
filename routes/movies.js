const express = require ('express');
const router = express.Router();
//define movies
const movies =[
    {
        id : 1,
        title : 'Avatar',
        director : 'James Cameroon',
        year : 2009,
        genre : 'Scifi'
    },
    {
        id : 2,
        title : 'Oppenheimer',
        director : 'Christopher Nolan',
        year : 2023,
        genre : 'history'
    },
    {
        id : 3,
        title : 'Jurassic Park',
        director : 'Steven Spielberg',
        year : 1993,
        genre : 'Scifi'
    },
    {
        id : 4,
        title : 'Godzilla vs Kong',
        director : 'Adam Wingard',
        year : 2021,
        genre : 'Scifi/Action'
    },
    {
        id : 5,
        title : 'King Kong',
        director : 'Adam Wingard',
        year : 2017,
        genre : 'Scifi/Action'
    }
]
//add movie
router.post('/',(req,res)=>{
    // console.log(req.body);
    movies.push(req.body);
    res.send('Movie added successfully').status(200);
})
//get movies
router.get('/',(req,res)=>{
    console.log('This is from Movies Route')
    res.send(movies);
})
//get movie by Id
router.get('/:id',(req,res)=>{
    const id = req.params.id;
    const filtered = movies.filter(movie=>movie.id==id);
    res.send(filtered);
})
module.exports= router;