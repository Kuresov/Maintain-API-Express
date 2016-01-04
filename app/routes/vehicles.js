// Vehicle Routes

var passport = require('passport');
var vehicles = require('../controllers/vehicles');

module.exports = function(router) {
  router.route('/')
  .all(
    passport.authenticate('bearer', { session: false }),
    function(req, res, next) {
    next();
  })
  .get(function(req, res) {
    vehicles.index(req, res);
  })
  .post(function(req, res) {
    vehicles.create(req, res)
  })
  .put(function(req, res) {
    vehicles.create(req, res)
  })
  .patch(function(req, res) {
    vehicles.update(req, res)
  })
  .delete(function(req, res) {
    vehicles.delete(req, res)
  });
}
