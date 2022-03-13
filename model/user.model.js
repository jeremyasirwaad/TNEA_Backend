const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newScheme = new Schema({
    email:String,
    password:String
})

module.exports = mongoose.model('User',newScheme);