const mongoose = require("mongoose"),
  noteSchema = new mongoose.Schema({
    key: {
      type: String,
      required: true,
    },
    startTime: {
      type: Number,
      required: true,
    },
  }),
  songSchema = new mongoose.Schema({
    notes: [noteSchema],
  });

module.exports = mongoose.model("Songs", songSchema);
