const store = require("./store");
const moment = require("moment");
const { response } = require("express");
let now = moment();

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error(
        `[message controller] [${now.format(
          "YYYY/MM/DD HH:mm:ss"
        )}] No hay usuario o mensaje`
      );
      return reject("Los datos del mensaje son inconsistente");
    }
    const fullMessage = {
      user: user,
      time: now.toISOString(),
      message: message,
    };

    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      console.error(
        `[message controller] [${now.format(
          "YYYY/MM/DD HH:mm:ss"
        )}] No hay usuario o mensaje`
      );
      return reject("Los datos son incorrectos");
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("ID invalido");
      return false;
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
