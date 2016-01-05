// Users Routes

var passport = require('passport');
var users = require('../controllers/users');

module.exports = function(router) {

  // Mostly for debugging at the moment
  router.route('/all')
  .all(
    passport.authenticate('bearer', { session: false }),
    function(req, res, next) {
    next();
  })
  .get(function(req, res) {
    users.all(req, res);
  });

  router.route('/')
  .all(
    passport.authenticate('bearer', { session: false }),
    function(req, res, next) {
    next();
  })
  .get(function(req, res) {
    users.index(req, res);
  })
  .post(function(req, res) {
    users.create(req, res)
  })
  .put(function(req, res) {
    users.create(req, res)
  })
  .patch(function(req, res) {
    users.update(req, res)
  })
  .delete(function(req, res) {
    users.delete(req, res)
  });
}
