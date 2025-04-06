var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Users = require("../models/users.model.js");

mongoose
  .connect(
    "mongodb+srv://:@centivo.ejmjdpo.mongodb.net/users"
  )
  .then(() => {
    console.log("Connected!");
    //var allUsers = mongoose.getCollection("users").find({});
    //console.log(allUsers);
  })
  .catch(() => {
    console.log("Connection failed!");
  });

/* GET users listing. */
router.get("/", async (req, res) => {
  var allUsers;
  try {
    //res.send("Connected with a GET.")
    const users = await Users.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  //res.send("Connected to users db.")
  //
});

router.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    //res.send(req.body);
    const user = await Users.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/update", async (req, res) => {
  try {
    console.log(req.body);
    res.send(
      "PUT: User resource for Centivo Technical Challenge. /user. Todo update a User by ID."
    );
    //res.send(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    console.log(req.body);
    res.send(
      "DELETE: User resource for Centivo Technical Challenge. /user. Todo delete a User by ID."
    );
    //res.send(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
