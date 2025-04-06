// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Centivo");

// Find a document in a collection.
db.getCollection("users").findOne({
    "_id" : ObjectId("68f23c467907f5997125175d")
});

/*db.getCollection("users").find({
});*/
