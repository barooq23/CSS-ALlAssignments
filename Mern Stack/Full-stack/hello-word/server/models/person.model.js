const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  message: String,
});

const Person = mongoose.model("person", personSchema);

module.exports = Person;