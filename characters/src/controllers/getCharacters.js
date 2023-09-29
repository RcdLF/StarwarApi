const { default: axios } = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const promise = await axios("http://database:8004/Characters");

  response(res, 200, promise.data);
};
