const { default: axios } = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(`http://database:8004/Films/${id}`);
  response(res, 201, data);
};
