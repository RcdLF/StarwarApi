const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:id", controllers.getPlanetID);

router.post("/", middlewares.validation, controllers.createPlanet);

module.exports = router;
