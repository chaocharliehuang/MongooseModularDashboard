var mongoose = require('mongoose');

var TurtleSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 256},
    color: {type: String, required: true, minlength: 2, maxlength: 256}
}, {timestamps: true});

var Turtle = mongoose.model('Turtle', TurtleSchema);