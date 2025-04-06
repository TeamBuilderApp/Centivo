# Centivo Coding Challenge.

A simple admin panel that manages user data for the Centivo take-home test. Uses HTTP Web API methods, GET, POST, PUT, and DELETE to manage users. Made using Node.js Express API that connects to a MongoDB database and retrieves user data.



FAQ:

How do I use MongoDB with Express JS?
The MongoDB Driver is the native driver for Node JS applications. Therefore, the Express JS server can use it to access MongoDB.

How do I create a REST API using Node Express JS and MongoDB?
A REST API can be created by setting up an Express server with connection to MongoDB Atlas, as well as exposing REST API endpoints to the client applications.

MongoDB Installation Steps:

0)
Install MongoDB Driver:
Run:
npm install mongodb

1)
Creating the users Database:
To create a database in MongoDB, start by creating a MongoClient object, then specify a connection URL with the correct ip address and the name of the database you want to create.

MongoDB will create the database if it does not exist, and make a connection to it.
Call node createUsersMongoDB.js this will create the Users Mongo Database, when it does not already exist.

Note that, in MongoDB, a database is not created until it gets content! MongoDB waits until you have created a collection (table), with at least one document (record) before it actually creates the database (and collection).

2)
Creating a Collection:
Note that, a collection in MongoDB is the same as a table in MySQL.
Create a collection called "users".
To create a collection in MongoDB, we can use the createCollection() method.
Run:
node createUsersCollection.js


Sample MongoDB Schema:

{ 
"_id": ObjectId, 
"name": "John Doe", 
"email": "johndoe@email.com", 
"age": 30 
}