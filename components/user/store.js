const Model = require("./model");

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

async function getUser(userName) {
  let filter = {};
  if (userName !== null) {
    filter = {
      name: userName,
    };
  }
  const user = await Model.find(filter);
  return user;
}

module.exports = {
  add: addUser,
  get: getUser,
};
