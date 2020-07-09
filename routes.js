const burgers = require('./controllers/burgers_controller');

exports.route = (app) => {
    app.get('/burgers', burgers.read);
    app.post('/');
    app.patch('/');
    //app.delete('/');

}