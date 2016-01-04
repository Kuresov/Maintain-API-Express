// Users Controller

helpers = require('../helpers/controller_helpers');

exports.all = function(req, res) {
  db.users.all().then(function (userList) {
    res.render('users', {
      users: JSON.stringify(userList)
    })
  });
}

exports.render = function(req, res) {
  token = helpers.getToken(req);
  db.users.findOne({ where: {auth_token: token } }).then(function (user) {
    res.send(user);
  });
}

exports.create = function(req, res) {
  console.log("Creating user");
}

exports.update = function(req, res) {
  console.log("Updating user");
}

exports.delete = function(req, res) {
  console.log("Deleting user");
}
