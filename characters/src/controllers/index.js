const { catchAsync } = require("../utils");

module.exports = {
  getCharacters: catchAsync(require("./getCharacters")),
  getCharacterID : catchAsync(require('./getCharacterID')),
  createCharacters: catchAsync(require("./createCharacters")),
};
