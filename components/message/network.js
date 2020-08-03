const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

// GET method route
router.get("/", function (req, res) {
  console.log(req.headers);
  res.header({ "custom-header": "Nuestro valor personalizado" });
  response.success(req, res, "Lista de mensajes");
});

// POST method route
router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(() => {
      response.error(
        req,
        res,
        "Error inesperado",
        400,
        "error en el controlador"
      );
    });
});

module.exports = router;
