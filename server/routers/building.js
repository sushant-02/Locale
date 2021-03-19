const Building = require("../models/building");
const Architect = require("../models/architect");
const { Router } = require("express");
const router = new Router();

router.post("/add-building", async (req, res) => {
  try {
    const architect = await Architect.findOne({ name: req.body.name });
    console.log(architect);
    delete req.body.name;
    req.body.architect = architect._id;
    if (architect) {
      const building = new Building(req.body);
      await building.save();
      res.sendStatus(201);
    } else {
      throw new Error("No architect by this name");
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

router.get("/search", async (req, res) => {
  try {
    //try to find architect by query
    const architect = await Architect.findOne({ name: req.query.q });
    if (architect) {
      await architect.populate("buildings").execPopulate();
      res.send({ architect, buidlings: architect.buildings });
    } else {
      //try to find building by that name
      const building = await Building.findOne({
        buildingName: req.query.q,
      });

      if (building) {
        res.send({ building });
      } else {
        throw new Error("Search Failed");
      }
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
