var mongoose = require('mongoose');
var Turtle = mongoose.model('Turtle');

module.exports = {
    showAll: function(req, res) {
        Turtle.find({}).sort('-createdAt').exec(function(err, turtles) {
            res.render('index', {turtles: turtles});
        });
    },
    new: function(req, res) {
        var turtle = new Turtle({name: req.body.name, color: req.body.color});
        turtle.save(function(err) {
            if (err) {
                res.render('new', {errors: turtle.errors, prefill: {name: req.body.name, color: req.body.color}});
            } else {
                res.redirect('/');
            }
        });
    },
    showTurtle: function(req, res) {
        Turtle.findOne({_id: req.params.id}, function(err, turtle) {
            if (!turtle) {
                res.redirect('/');
            }
            res.render('turtle', {turtle: turtle});
        });
    },
    editTurtle: function(req, res) {
        Turtle.findOne({_id: req.params.id}, function(err, turtle) {
            if (!turtle) {
                res.redirect('/');
            }
            turtle.name = req.body.name;
            turtle.color = req.body.color;
            turtle.save(function(err) {
                if (err) {
                    res.render('edit', {errors: turtle.errors, turtle: turtle});
                } else {
                    res.redirect('/turtles/' + turtle._id);
                }
            });
        });
    },
    editPage: function(req, res) {
        Turtle.findOne({_id: req.params.id}, function(err, turtle) {
            if (!turtle) {
                res.redirect('/');
            }
            res.render('edit', {turtle: turtle});
        });
    },
    destroy: function(req, res) {
        Turtle.remove({_id: req.params.id}, function(err) {
            res.redirect('/');
        });
    }
}