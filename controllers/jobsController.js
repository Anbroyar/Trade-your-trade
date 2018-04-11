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
      jobName: req.body.jobName,
      jobType: req.body.jobType,
      totalHours: req.body.totalHours,
      totalCost: req.body.totalCost,
      userRequested: req.body.serRequested
    };
    db.Jobs
      .create(job)
      .then(dbJobs => res.json(dbJobs))
      .catch(err => { 
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    db.Jobs
      .findOneAndUpdate({ _id: req.params.id }, {$set:{userAssigned: req.body.userId}})
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
