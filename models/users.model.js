var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const usersSchema = new Schema(
{
    id: Number,
    name: String,
    email: String,
    age: { type: Number, default: 0}
    
});

const Users = mongoose.model("users", usersSchema);

module.exports = mongoose.model("users", usersSchema);