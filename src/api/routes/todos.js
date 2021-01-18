const express = require('express');
const { updateOne } = require('../models/Todos');
const router = express.Router();
const Todos = require('../models/Todos');


router.get('/', async (req, res) => {
    try {
        const todos = await Todos.find()
        res.json(todos)
    } catch(err) {
        res.json({ message: err })
    }
});

router.get('/:todoId', async (req, res) => {
    console.log(req.params.todoId);
    try{
        const todo = await Todos.findById(req.params.todoId)
        res.json(todo);
    } catch(err) {
        res.json({ message : err });
    }
    
});

router.post('/', async (req, res) => {
    const todos = new Todos({
        name: req.body.name,
        project: req.body.project,
        done: req.body.done,
        priority: req.body.priority
    });
    try{
        const savedTodo = await todos.save()
        res.json(savedTodo);
    } catch(err) {
        res.json({message:err})
    }
    
});

router.delete('/:todoId', async (req, res) => {
    try {
        const removedTodo = await Todos.remove({ _id: req.params.todoId })
        res.json(removedTodo);
    } catch(err){
        res.json({ message: err });
    }
});

router.patch('/:todoId', async (req, res) => {
    try { 
        const updatedTodo = await Todos.updateOne(
            { _id: req.params.todoId }, 
            { $set: { name: req.body.name} }
        );
        res.json(updatedTodo);
    } catch (err) {
        res.json({ message: err })
    }
});

module.exports = router;