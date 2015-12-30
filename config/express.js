var express = require('express');
module.exports = function () {
  var app = express();

  // Import views, define view engine
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  // Import routes
  require('../app/routes/')(app);
  return app;
}
