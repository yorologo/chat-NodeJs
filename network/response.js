const moment = require("moment");
let now = moment();

exports.success = function (request, response, message, status = 200) {
  response.status(status).send({
    error: "",
    body: message,
  });
};

exports.error = function (request, response, message, status = 500, details) {
  console.error(
    `[response error] [${now.format("YYYY/MM/DD HH:mm:ss")}] ${details}`
  );
  response.status(status).send({
    error: message,
    body: "",
  });
};
