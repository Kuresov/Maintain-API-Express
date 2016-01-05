// Controller Helpers

exports.getToken = function(req) {
  parts = req.headers.authorization.split(' ');
  if(parts[0] === 'Bearer') {
    return parts[1];
  }
}

exports.cleanParams = function(model, permittedParams) {
  Object.keys(model).forEach(function(prop) {
    if(permittedParams.indexOf(prop) === -1) {
      delete model[prop];
    }
  });
  return model;
}

exports.errorMessages = function(err) {
  if(!err.errors) { return }

  errorMessage = { errors: [] };
  err.errors.forEach(function(error) {
     errorMessage.errors.push(error.message)
  })
  return errorMessage
}
