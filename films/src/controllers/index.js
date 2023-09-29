const { catchAsync } = require("../utils");

module.exports = {
  getFilms: catchAsync(require("./getFilms")),
  getFilmID: catchAsync(require("./getFilmID")),
  createFilms: catchAsync(require("./createFilms")),
};
