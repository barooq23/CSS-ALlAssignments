const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters."]
    },
    position: {
        type: String,
    },
    status: {
        type: String,
    }
}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;