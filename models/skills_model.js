const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skillsSchema = new Schema ({
  name: String
});

const Skills = mongoose.model("Skill", skillsSchema);

module.exports = Skills;

Skills.seeds = () => {
  Skills.create([
    {name: 'DJ'},
    {name: 'Carpenter'},
    {name: 'The Dude'}
  ])
};
