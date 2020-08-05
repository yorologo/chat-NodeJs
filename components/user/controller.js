const store = require("./store");

function addUser(name) {
  if (!name) {
    console.error(
      `[message controller] [${now.format(
        "YYYY/MM/DD HH:mm:ss"
      )}] No hay usuario`
    );
    return Promise.reject("Los datos del usuario son inconsistentes");
  }

  const user = {
    name,
  };

  return store.add(user);
}

function getUser(name) {
  return store.get(name);
}

module.exports = {
  addUser,
  getUser,
};
