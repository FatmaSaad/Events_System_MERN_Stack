const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Speaker = new Schema({
	age: Number,
	name: String,
	email: String,
	UserName: String,
	Password: String,
	city: String,
	street: String,
	building: String,
});
//mapping
module.exports = mongoose.model("speakers", Speaker);
