const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

const todosRoute = require('./src/api/routes/todos.js')
app.use('/todos', todosRoute);

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true }, 
    () => console.log('connected to db'));

// How to start listening
app.listen(3000);

// https://www.youtube.com/watch?v=vjf774RKrLc