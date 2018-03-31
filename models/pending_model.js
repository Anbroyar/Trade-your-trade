const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pendingSchema = new Schema ({
  jobname: {
    type: String,
    required: true
  },
  jobtype: {
    type: String,
    required: true
  },
  esthours: {
    type: Number,
    required: true
  },
  userRequested: {
    type: String,
  },
  dateRequested: {
    type: Date,
    default: Date.now
  },
});

const Pending = mongoose.model("Pending", pendingSchema);

module.exports = Pending;
