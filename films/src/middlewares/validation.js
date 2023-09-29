const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { title } = req.body;
  console.log(title);

  if (title) return next();
  else throw new ClientError("que error culiao", 401);
};
