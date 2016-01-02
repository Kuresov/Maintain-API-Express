var express = require('express'),
    bodyParser = require('body-parser'),
    //passport = require('passport'),
    BearerStrategy = require('passport-http-bearer').Strategy;

module.exports = function () {
  var app = express();
  var passport = require('passport');

  // Configure passport token strategy
  //passport.use(new BearerStrategy(
  //  function (token, done) {
  //    db.users.findOne({
  //      where: { auth_token: token }
  //    }).then(function (user) {
  //      if (!user) { return done(null, false, {message: 'Invalid Token'}) }
  //      return done(null, user, { scope: 'all' });
  //    }).fail(function (err) {
  //      console.log("DB Error:", err);
  //      return done(err);
  //    });
  //  })
  //);

  passport.use(new BearerStrategy(
    function (token, done) {
      var user = db.users.findOne({
        where: { auth_token: token }
      });
      console.log(user);
      if (!user) { return done(null, false, {message: 'Invalid Token'}) }
      return done(null, user, { scope: 'all' });
    })
  );

  // Set up middleware
  var logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
  };

  app.use(logger);
  //app.use(isAuthenticated);
  app.use(passport.initialize());
  app.use(bodyParser.json());

  // Import views, define view engine
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  // Import routes
  require('../app/routes/')(app, passport);

  return app;
}
