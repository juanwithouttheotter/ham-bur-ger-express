const burgers = require('./controllers/burgers_controller');

exports.route = (app) => {
    app.get('/burgers', burgers.read);
    app.post('/burgers', burgers.create);
    app.patch('/burgers/:id', burgers.update);
    

}