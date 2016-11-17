var mongoose = require("mongoose");

AdventurerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    race: String,
    level: {
        type: Number,
        default: 1
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
});

// creates the "Adventurer" collection in the database
module.exports = mongoose.model("Adventurer", AdventurerSchema);
