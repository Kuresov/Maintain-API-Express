// Vehicles Controller

db = require('../models');

exports.index = function(req, res) {
  db.vehicles.all().then(function (vehicleList) {
    res.render('vehicles', {
      vehicles: JSON.stringify(vehicleList)
    })
  });
}

exports.create = function(req, res) {
  console.log("Creating vehicle");
}

exports.update = function(req, res) {
  console.log("Updating vehicle");
}

exports.delete = function(req, res) {
  console.log("Deleting vehicle");
}
