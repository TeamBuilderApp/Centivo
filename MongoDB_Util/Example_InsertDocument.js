var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Users_MongoDB");
  //Insert 3 documents, with specified id values:
  var myobj = [
    { _id: 0, name: 'John Doe', email: 'johndoe@email.com', age: '30'},
    { _id: 1, name: 'Jane Doe', email: 'janedoe@email.com', age: '30'},
    { _id: 2, name: 'John1 Doe', email: 'john1doe@email.com', age: '31'}
  ];
  dbo.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    //Return the result object:
    console.log(res);
    db.close();
  });
});