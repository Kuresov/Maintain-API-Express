// Users Controller

db = require('../models');

exports.render = function(req, res) {
  var userList;
  db.users.all().then(function (userList) {
    res.render('users', {
      users: userList
    })
  });
}
