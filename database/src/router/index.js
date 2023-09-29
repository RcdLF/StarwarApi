const { Router } = require("express");
const store = require("../database");

const { validateModel } = require("../middleware");

const router = Router();
router.get("/:model", validateModel, async (req, res) => {
  const model = req.params.model;
  const response = await store[model].list();

  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  console.log(response);

  res.status(200).json(response);
});

router.post("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const data = req.body;

  const response = await store[model].insert(data);

  res.status(201).send(response);
});

module.exports = router;
