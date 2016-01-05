var express = require('express'),
    database = require('../app/models'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    BearerStrategy = require('passport-http-bearer').Strategy;

module.exports = function () {
  var app = express();

  // Configure passport token strategy
  passport.use(new BearerStrategy(
    function (token, done) {
      database.User.findOne({
        where: { auth_token: token }
      }).then(function (user) {
        return done(null, user);
      }).catch(function (err) {
        return done(err, false);
      });
    })
  );

  // For viewing routes; http://localhost:PORT/pathfinder/
  var pathfinderUI = require('pathfinder-ui');
  app.use('/pathfinder', function (req, res, next) {
    pathfinderUI(app);
    next();
  }, pathfinderUI.router);

  // Set up middleware
  var logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
  };

  app.use(logger);
  app.use(passport.initialize());
  app.use(bodyParser.json());

  // Set database variable for all requests
  app.all('*', function(req, res, next) {
     db = database;
     next();
  })

  // Import views, define view engine
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  // Import routes
  require('../app/routes/')(app, passport);

  return app;
}
