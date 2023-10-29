const express = require('express')
const app = express()
const port = 3000
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
const Logger = (req,res,next)=>{
    console.log(`${req.method} request received on ${req.url}`);
    next();
}
//Middleware
app.use(express.json());
//Logger
app.use(Logger);
app.get('/', (req, res) => res.send('Welcome to Movie API!'));
//add movie
app.post('/api/movies',(req,res)=>{
    // console.log(req.body);
    movies.push(req.body);
    res.send('Movie added successfully').status(200);
})
//get movies
app.get('/api/movies',(req,res)=>{
    res.send(movies);
})
//get movie by Id
app.get('/api/movies/:id',(req,res)=>{
    const id = req.params.id;
    const filtered = movies.filter(movie=>movie.id==id);
    res.send(filtered);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))