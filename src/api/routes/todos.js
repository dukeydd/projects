const express = require('express');
const router = express.Router();
const Todos = require('../models/Todos');


router.get('/', (req, res) => {
    res.send('We are on todos')
});

router.get('/single', (req, res) => {
    res.send('Single todo')
});

router.post('/', (req, res) => {
    const todos = new Todos({
        name: req.body.name,
        project: req.body.project,
        done: req.body.done,
        priority: req.body.priority
    });
    
    todos.save()
        .then(data => {
            res.json(data);
            console.log(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});

module.exports = router;