const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        minlength: [3, "Author name must be at least 3 characters."]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age must me greater than 18"]
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;