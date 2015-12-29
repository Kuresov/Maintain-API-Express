var port = 3000;
var express = require('./config/express');
var db = require('./app/models');
var bodyParser = require('body-parser');
var app = express();

var logger = function (req, res, next) {
  console.log(req.method, req.url);
  next();
};
app.use(logger);
app.use(bodyParser.json());

db.users.all().each(function (user) {
    console.log(user.dataValues.id, user.dataValues.name, user.dataValues.email);
});

app.listen(port);
console.log('Maintain-API running at http://localhost:' + port);
