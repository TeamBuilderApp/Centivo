//var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

//Creates the Users Mongo Database. 
// DB Name: "Users_MongoDB".
// See README.md, for each step on database creation.
var url = "mongodb://localhost:27017/Users_MongoDB";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Successfully created a new Mongo Database for the Users.");
  db.close();
});