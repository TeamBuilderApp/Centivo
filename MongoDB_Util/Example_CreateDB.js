//var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

//Creates the Users Mongo Database. 
var url = "mongodb://localhost:27017/users?directConnection=true";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Successfully created a new Mongo Database for the Users.");
  db.close();
});