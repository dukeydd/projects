const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middleswares
// app.use('/posts', () => {
//     console.log('This is middleware doing its thing');
// });

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

app.get('/posts', (req, res) => {
    res.send('We are on posts')
});

mongoose.connect('mongodb://<user>:<password>@127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true }, 
    () => console.log('connected to db'));

// How to start listening
app.listen(3000);