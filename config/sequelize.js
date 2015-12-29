var Sequelize = require('sequelize');
module.exports = function () {
  var sequelize = new Sequelize('maintain-api-node', 'admin', '123qwe', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
  sequelize
    .authenticate()
    .then(function (err) {
      console.log('Database Connected');
    }, function (err) {
      console.log('Unable to connect to database. Error: ', err);
    });

  return sequelize;
}

