// Vehicles Controller

db = require('../models');

exports.render = function(req, res) {
  db.vehicles.all().then(function (vehicleList) {
    res.render('vehicles', {
      vehicles: JSON.stringify(vehicleList)
    })
  });
}
