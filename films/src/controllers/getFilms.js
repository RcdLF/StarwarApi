const { default: axios } = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { data } = await axios("http://database:8004/Films");
  response(res, 200, data);
};
