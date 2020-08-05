const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

// GET method route
router.get("/", function (req, res) {
  const filterMessages = req.query.user || null;
  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList);
    })
    .catch((error) => {
      response.error(req, res, "Error inesperado", 500, error);
    });
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
        "Error en el controlador"
      );
    });
});

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data);
    })
    .catch((error) => {
      response.error(req, res, "Error interno", 500, error);
    });
});

module.exports = router;
