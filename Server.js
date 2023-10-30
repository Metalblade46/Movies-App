const express = require('express')
require ('dotenv').config();
const app = express()
const port = process.env.PORT;
const moviesRouter = require('./routes/movies');
const mongoose = require('mongoose');
mongoose.connect(process.env.Mongo_URL).then(()=>{
    console.log('Connected to Mongoose');
}).catch(e=>{
    console.log(e);
})
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
const Logger = (req,res,next)=>{
    console.log(`${req.method} request received on ${req.url}`);
    next();
}
//Middleware
app.use(express.json());
//Logger
app.use(Logger);
app.get('/', (req, res) => res.send('Welcome to Movie API!'));
app.use('/api/movies',moviesRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))