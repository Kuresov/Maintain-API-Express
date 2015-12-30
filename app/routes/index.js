// Routes

module.exports = function(app) {
  var index = require('../controllers');
  app.get('/', index.render);

  var users = require('../controllers/users');
  app.get('/users', users.render);

  //var vehicles = require('../controllers/vehicles');
  //app.get('/vehicles', vehicles.render);
}
