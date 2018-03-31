const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pendingSchema = new Schema ({
  jobname: {
    type: string,
    required: true
  },
  jobtype: {
    type: string,
    required: true
  },

  esthours: {
    type: string,
    required: true
  },
  userRequested: {

  }

});

const Pending = mongoose.model("Pending", pendingSchema);

module.exports = Pending;
