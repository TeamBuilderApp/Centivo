var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Users = require("../models/userInfo.model.js");

mongoose
  .connect(
    "mongodb+srv://:@centivo.ejmjdpo.mongodb.net/Centivo"
  )
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const users = await Users.find({});
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  //res.send("Connected to users db.")
  //
});

/* GET user by id. */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("ID: " + id);
    const user = await Users.findById(id);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  //res.send("Connected to users db.")
  //
});

router.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    const user = await Users.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Attempting to update user by id: " + id);
    const user = await Users.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updateUser = await Users.findById(id);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Attempting to delete user by id: " + id);
    const user = await Users.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
