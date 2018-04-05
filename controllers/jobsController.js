const db = require("../models");

// Defining methods for the jobsController
module.exports = {
  findAll: function(req, res) {
    db.Jobs
      .find(req.query)
      .sort({ date: -1 })
      .then(dbJobs => res.json(dbJobs))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Jobs
      .findById(req.params.id)
      .then(dbJobs => res.json(dbJobs))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const job = {
      _id: req.body._id,
      name: req.body.jobname,
      type: req.body.jobtype,
      hours: req.body.totalhours,
      cost: req.body.totalCost
    };
    db.Jobs
      .create(job)
      .then(dbJobs => res.json(dbJobs))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Jobs
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbJobs => res.json(dbJobs))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Jobs
      .findById({ _id: req.params.id })
      .then(dJobs => dbJobs.remove())
      .then(dbJobs => res.json(dbJobs))
      .catch(err => res.status(422).json(err));
  }
};
