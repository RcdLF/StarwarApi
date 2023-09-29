const { default: axios } = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const id = req.params.id;
  console.log(id, "Este seria el id papa");
  const { data } = await axios.get(`http://database:8004/Characters/${id}`);
  response(res, 201, data);
};
