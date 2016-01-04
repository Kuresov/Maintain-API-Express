// Controller Helpers

exports.getToken = function(req) {
  return req.headers.authorization.split(' ')[1];
}
