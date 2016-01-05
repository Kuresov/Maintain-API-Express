// Vehicles Controller

var helpers = require('../helpers/controller_helpers');

exports.index = function(req, res) {
  db.Vehicle.all().then(function (vehicleList) {
    res.render('vehicles', {
      vehicles: JSON.stringify(vehicleList)
    })
  });
}

exports.create = function(req, res) {
  if(Object.keys(req.body).length > 1) { return res.send("Cannot create multiple vehicles") };
  if(!req.body.vehicle) { return res.send("No vehicle provided") };

  var vehicleParams = db.Vehicle.permittedParams();
  var token = helpers.getToken(req);
  db.User.findOne({ where: { auth_token: token } }).then(function(user) {

    var vehicle = db.Vehicle.build(
        helpers.cleanParams(req.body.vehicle, vehicleParams)
        );

    //TODO: Anything else need to be done here?

    vehicle.save()
      .then(function(record) {
        res.send(helpers.cleanParams(record.get(), vehicleParams));
      }).catch(function(err) {
         res.send(helpers.errorMessages(err));
      })
  });
}

exports.update = function(req, res) {
  console.log("Updating vehicle");
}

exports.delete = function(req, res) {
  console.log("Deleting vehicle");
}
