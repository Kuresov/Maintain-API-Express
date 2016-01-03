// Routes

var passport = require('passport');
module.exports = function(app) {
  var index = require('../controllers');
  app.get('/', index.render);

  var users = require('../controllers/users');
  app.get('/users',
    passport.authenticate('bearer', { session: false }),
    function(req, res) {
      users.render(req, res);
    });

  var vehicles = require('../controllers/vehicles');
  app.get('/vehicles', vehicles.render);
}
