const moment = require("moment");
let now = moment();

const statusMessages = {
  "200": "Hecho",
  "201": "Creado",
  "400": "Formato invalido",
  "500": "Error interno",
};

exports.success = function (request, response, message, status = 200) {
  response.status(status).send({
    error: "",
    body: message || statusMessages[status],
  });
};

exports.error = function (request, response, message, status = 500, details) {
  console.error(
    `[response error] [${now.format("YYYY/MM/DD HH:mm:ss")}] ${details}`
  );
  response.status(status).send({
    error: message || statusMessages[status],
    body: "",
  });
};
