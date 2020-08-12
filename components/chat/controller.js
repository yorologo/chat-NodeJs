const store = require("./store");

function addChat(users) {
  if (!users || !Array.isArray(users)) {
    return Promise.reject("Lista de usuarios invalida");
  }
  const chat = {
    users: users,
  };
  return store.add(chat);
}

function listChats(chat) {
  return store.list(chat);
}

module.exports = { listChats, addChat };
