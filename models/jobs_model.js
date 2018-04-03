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

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Completed;
