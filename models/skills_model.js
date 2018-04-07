const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skillsSchema = new Schema ({
  name: String
});

const Skill = mongoose.model("Skill", skillsSchema);

module.exports = Skill;

Skill.seeds = () => {
  Skill.create([
    {name: 'DJ'},
    {name: 'Carpenter'},
    {name: 'The Dude'}
  ])
};