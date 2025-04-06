var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userInfoSchema = new Schema(
{
    id: Number,
    name: String,
    email: String,
    age: { type: Number, default: 0}
    
});

const Users = mongoose.model("UserInfo", userInfoSchema, "users");

module.exports = mongoose.model("UserInfo", userInfoSchema, "users");