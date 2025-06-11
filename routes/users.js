var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Users = require("../models/userInfo.model.js");

mongoose
  .connect("mongodb+srv://:@centivo.ejmjdpo.mongodb.net/Centivo")
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

/* GET all users listing. */
//Returns the user’s details in JSON format
router.get("/", async (req, res) => {
  try {
    const users = await Users.find({});
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//GET endpoint at /users/:id
//Accepts a user ID as a route parameter
//Queries a MongoDB collection named "users" for a document with a matching _id
//Returns the user’s details in JSON format
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("ID: " + id);
    const user = await Users.findById(id);
    console.log(user);

    //Returns a 404 Not Found response if the user is not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    //Gracefully handle invalid ObjectId errors
    res.status(500).json({ message: error.message });
  }
});

/* GET users Unique twist: Only return users where the age is greater than 21 listing. */
//Returns the user’s details in JSON format
router.get("/age/over21", async (req, res) => {
  try {
    const users = await Users.find({ age: { $gt: 21 } });
    console.log(users);
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
    const user = await Users.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//PUT endpoint at /users/:id
//Accepts a user ID as a route parameter
//Queries a MongoDB collection named "users" for a document with a matching _id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Attempting to update user by id: " + id);
    const updateData = req.body; // Extract user input
    const user = await Users.findByIdAndUpdate(id, { $set: updateData });

    //Returns a 404 Not Found response if the user is not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updateUser = await Users.findById(id);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//DELETE endpoint at /users/:id
//Accepts a user ID as a route parameter
//Queries a MongoDB collection named "users" for a document with a matching _id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Attempting to delete user by id: " + id);
    const user = await Users.findByIdAndDelete(id);

    //Returns a 404 Not Found response if the user is not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
