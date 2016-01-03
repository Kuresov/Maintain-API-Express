// Routes
var routes = require('require-dir')();
var express = require('express');
var passport = require('passport');

module.exports = function(app) {

  Object.keys(routes).forEach(function(routeName) {
    var router = express.Router();
    require('./' + routeName)(router);
    app.use('/' + routeName, router);
  })
}
