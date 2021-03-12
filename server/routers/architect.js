const { Router } = require("express");
const Architect = require("../models/architect");

const router = new Router();

router.post("/add-architect", async (req, res) => {
  try {
    const architect = new Architect(req.body);
    await architect.save();
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

module.exports = router;
