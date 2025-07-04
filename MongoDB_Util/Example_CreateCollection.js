var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/?directConnection=true";

//Creates the Users Mongo Database Collection. 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("users");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Users collection created!");
    db.close();
  });
});