# Centivo Coding Challenge.

A simple Node.js Express API that connects to a MongoDB database and retrieves user data.

Admin panel that manages user data for the Centivo take-home test. Uses HTTP Web API methods, GET, POST, PUT, and DELETE to manage users. Made using Node.js Express API that connects to a MongoDB database and retrieves user data.


Instructions:
1) Place the connection string in routes/users.js (I will send it to you).
2) Open a terminal and cd to this project folder. \Centivo
3) Run the command npm start.
2) Run Postman or your browser and run the following URLs for each HTTP call:
2a)GET All Users. http://localhost:3000/users 
2b)GET endpoint at /users/:id that: http://localhost:3000/users/67f23c467907f5997125175d
2c) GET Unique twist: Only return users where the age is greater than 21: http://localhost:3000/users/age/over21
2d) Optional POST add a User: http://localhost:3000/users/create
with the body JSON:
{ 
"id": 5,
"name": "John1 Doe1", 
"email": "john1doe1@email.com", 
"age": 35 
}
2e) Optional DELETE a User: http://localhost:3000/users/67f27fdd50a97a324c83fd0c



Misc:
FAQ:

How do I use MongoDB with Express JS?
The MongoDB Driver is the native driver for Node JS applications. Therefore, the Express JS server can use it to access MongoDB.

How do I create a REST API using Node Express JS and MongoDB?
A REST API can be created by setting up an Express server with connection to MongoDB Atlas, as well as exposing REST API endpoints to the client applications.


Sample MongoDB Schema:

{ 
"_id": ObjectId, 
"name": "John Doe", 
"email": "johndoe@email.com", 
"age": 30 
}