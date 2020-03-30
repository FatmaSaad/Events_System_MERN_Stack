const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Speaker = new Schema({
	age: {type:Number, required: true },
	name: {type:String, required: true },
	email: {type:String, required: true },
	UserName:{type: String, required: true },
	Password: {type:String, required: true },
	city: String,
	street: String,
	building: String,
},    { timestamps: true },
)
//mapping
module.exports = mongoose.model("speakers", Speaker);
