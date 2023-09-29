const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
  Characters: conn.model("Character", require("./schemas/characterSchema")),
  Films: conn.model("Film", require("./schemas/filmSchema")),
  Planets: conn.model("Planet", require("./schemas/planetSchema")),
};
