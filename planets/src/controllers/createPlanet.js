const { default: axios } = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { body } = req;
  const { data } = await axios.post("http://database:8004/Planets", body);
  response(res, 201, data);
};
