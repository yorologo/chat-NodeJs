const list = [];

function addMessage(message) {
  list.push(message);
}

function listMessages() {
  return list;
}

module.exports = {
  add: addMessage,
  list: listMessages,
  // get
  // update
  // delete
};
