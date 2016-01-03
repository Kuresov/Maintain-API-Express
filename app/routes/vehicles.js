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
    vehicles.render(req, res);
  })
  .post(function(req, res) {
    res.send('created');
  });
  .put()
  .patch()
  .delete();
}
