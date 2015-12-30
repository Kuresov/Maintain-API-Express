var express = require('express');
var bodyParser = require('body-parser');

module.exports = function () {
  var app = express();

  // Import views, define view engine
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  // Set up middleware
  var logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
  };

  var authenticateUser = function (req, res, next) {
    if(req.headers['x-user-token']) {
      db.users.findOne({
        where: { auth_token: req.headers['x-user-token'] }
      }).then(function(user) {
        if(user) {
          console.log('Authorized!');
          next();
        } else {
          res.send('Not Authorized!');
          console.log('Not Authorized!');
          console.log(req.headers);
        }
      });
    } else {
      res.send('Not Authorized!');
      console.log('Not Authorized!');
      console.log(req.headers);
    }
  };

  app.use(logger);
  app.use(authenticateUser);
  app.use(bodyParser.json());

  // Import routes
  require('../app/routes/')(app);
  return app;
}
