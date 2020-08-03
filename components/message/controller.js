const store = require("./store");
const moment = require("moment");
let now = moment();

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error(
        `[message controller] [${now.format(
          "YYYY/MM/DD HH:mm:ss"
        )}] No hay usuario o mensaje`
      );
      return reject("Los datos son incorrectos");
    }
    const fullMessage = {
      user: user,
      time: now.format("YYYY/MM/DD HH:mm:ss"),
      message: message,
    };

    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  addMessage,
  getMessages,
};
