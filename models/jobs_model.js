const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobsSchema = new Schema ({
  jobname: {
    type: String,
    required: true
  },
  jobtype: {
    type: Schema.Types.ObjectId,
    ref: 'Skills',
    required: true
  },
  totalhours: {
    type: Number
  },
  totalCost: {
    type: Number
  },
  userRequested: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userAssigned: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dateCompleted: {
    type: Date,
    default: Date.now
  }
});

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Completed;
