const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skillsSchema = new Schema ({
  name: String
});

const Skill = mongoose.model("Skill", skillsSchema);

module.exports = Skill;

Skills.seeds = () => {
  Skills.create([
    {name: 'DJ'},
    {name: 'Carpenter'},
    {name: 'The Dude'}
  ])
};
>>>>>>> bca512a65b8faf21964ff46a67c24a67a28cb043
