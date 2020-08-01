exports.success = function (request, response, message, status = 200) {
  response.status(status).send({
    error: "",
    body: message,
  });
};

exports.error = function (request, response, message, status = 500) {
  response.status(status).send({
    error: message,
    body: "",
  });
};
