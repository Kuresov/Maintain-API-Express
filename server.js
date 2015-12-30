var port = 3000;
var express = require('./config/express');
var db = require('./app/models');
var app = express();

db.sequelize.sync().then(function () {
  console.log('DB Sync');
  app.listen(port);
  console.log('Maintain-API running at http://localhost:' + port);
}, function (error) {
  console.log(error);
});
