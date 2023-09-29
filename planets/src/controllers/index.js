const { catchAsync } = require("../utils");

module.exports = {
  getPlanets: catchAsync(require("./getPlanets")),
  getPlanetID : catchAsync(require('./getPlanetID')),
  createPlanet: catchAsync(require("./createPlanet")),
};
