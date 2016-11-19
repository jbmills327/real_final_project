var mongoose = require("mongoose");

AdventurerSchema = new mongoose.Schema({
    name: String,
    class: String,
    race: String,
    level: {
        type: Number,
        default: 1
    },
    xp: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
});

// creates the "Adventurer" collection in the database
module.exports = mongoose.model("Adventurer", AdventurerSchema);
