const db = require("../models");

// Defining methods for the SkillsController
module.exports = {
  findAll: function(req, res) {
    db.Skills
      .find(req.query)
      .sort({ name: 1 })
      .then(dbSkills => res.json(dbSkills))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Skills
      .findById(req.params.id)
      .then(dbSkills => res.json(dbSkills))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Skills
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbSkills => res.json(dbSkills))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Skills
      .findById({ _id: req.params.id })
      .then(dbSkills => dbSkills.remove())
      .then(dbSkills => res.json(dbSkills))
      .catch(err => res.status(422).json(err));
  },
  createOne: function(req, res) {
    db.Skills
      .create(req.body)
      .then(dbSkills => res.json(dbSkills))
      .catch(err => res.status(422).json(err));
  }
};
