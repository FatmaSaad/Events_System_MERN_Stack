const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Event = new Schema({
    title:{type:String, required: true },
    description:{type:String, required: false },
	time: { type: [String], required: true },
	rating: { type: Number, required: false },
    mainSpeaker:{type:String,ref:"speakers"},
    otherSpeakers:[{type:String,ref:"speakers"}],
    profileImg: {type:String, required: false },

},    { timestamps: true },
)
//mapping
module.exports = mongoose.model("events", Event);
