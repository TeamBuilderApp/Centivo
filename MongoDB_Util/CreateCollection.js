var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//Creates the Users Mongo Database Collection. 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Users_MongoDB");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Users collection created!");
    db.close();
  });
});