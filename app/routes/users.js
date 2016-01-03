// Users Routes

var passport = require('passport');
var users = require('../controllers/users');

module.exports = function(router) {
  router.get('/',
    passport.authenticate('bearer', { session: false }),
    function(req, res) {
      users.render(req, res);
    });
}
