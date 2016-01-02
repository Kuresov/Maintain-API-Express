// Users Controller

db = require('../models');

exports.render = function(req, res) {
  db.users.all().then(function (userList) {
    res.render('users', {
      users: JSON.stringify(userList)
    })
  });
}
