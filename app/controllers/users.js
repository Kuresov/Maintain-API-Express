// Users Controller

var helpers = require('../helpers/controller_helpers');

exports.all = function(req, res) {
  db.User.all().then(function (userList) {
    res.render('users', {
      users: JSON.stringify(userList)
    })
  });
}

exports.index = function(req, res) {
  var token = helpers.getToken(req);
  db.User.findOne({ where: {auth_token: token } }).then(function (user) {
    res.send(user);
  });
}

exports.create = function(req, res) {
  res.send("Creating User");
}

exports.update = function(req, res) {
  console.log("Updating user");
}

exports.delete = function(req, res) {
  console.log("Deleting user");
}
