const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const completedSchema = new Schema ({
  jobname: {
    type: String,
    required: true
  },
  jobtype: {
    type: String,
    required: true
  },
  totalhours: {
    type: Number,
    required: true
  },
  totalCost: {
    type: Number,
    required: true
  },
  userRequested: {
    type: String,
    trim: true
  },
  userCompleted: {
    type: String,
    trim, true
  },
  dateCompleted: {
    type: Date,
    default: Date.now
  }
});

const Completed = mongoose.model("Completed", completedSchema);

module.exports = Completed;
