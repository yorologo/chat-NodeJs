const express = require("express");
const bodyParser = require("body-parser");
// const router = require("./components/message/network");
const router = require("./network/routes");

let port = 3000;
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);
router(app);

app.use("/app", express.static("public"));

app.listen(port);
console.log(`La aplicacion esta escuchando en http://localhost:${port}`);
