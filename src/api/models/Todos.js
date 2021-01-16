var mongoose = require('mongoose');

const TodosSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    project: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low']
    }
});

module.exports = mongoose.model('Todos', TodosSchema);