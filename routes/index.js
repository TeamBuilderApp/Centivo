var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.redirect("/users"); //Redirect to the users API page.
});

module.exports = router;
