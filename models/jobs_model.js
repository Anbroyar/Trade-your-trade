const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobsSchema = new Schema ({
  jobName: {
    type: String,
    required: true
  },
  jobType: {
    type: Schema.Types.ObjectId,
    ref: 'Skills',
    required: true
  },
  totalHours: {
    type: Number
  },
  totalCost: {
    type: Number
  },
  userRequested: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
  userAssigned: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
  dateCompleted: {
    type: Date,
  }
});

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Jobs;
