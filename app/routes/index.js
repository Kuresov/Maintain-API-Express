module.exports = function(app) {
  var index = require('../controllers');
  app.get('/', index.render);
}
