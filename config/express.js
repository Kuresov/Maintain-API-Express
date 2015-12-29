var express = require('express');
module.exports = function () {
  var app = express();
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  require('../app/routes/')(app);
  return app;
}
