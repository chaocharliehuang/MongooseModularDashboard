var turtles = require('../controllers/turtles.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        turtles.showAll(req, res);
    });
    
    app.get('/turtles/new', function(req, res) {
        res.render('new', {prefill: {name: '', color: ''}})
    });
    
    app.post('/turtles', function(req, res) {
        turtles.new(req, res);
    });
    
    app.get('/turtles/:id', function(req, res) {
        turtles.showTurtle(req, res);
    });
    
    app.post('/turtles/:id', function(req, res) {
        turtles.editTurtle(req, res);
    });
    
    app.get('/turtles/edit/:id', function(req, res) {
        turtles.editPage(req, res);
    });
    
    app.post('/turtles/destroy/:id', function(req, res) {
        turtles.destroy(req, res);
    });
}