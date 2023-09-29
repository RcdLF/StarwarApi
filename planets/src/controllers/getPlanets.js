const { default: axios } = require("axios");
const { response } = require("../utils");
module.exports = async (req, res) => {
  const { data } = await axios("http://database:8004/Planets");

  response(res, 201, data);
};
