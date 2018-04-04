const mongoose = required('mongoose');

const Schema = mongoose.Schema;

const skillsSchema = new Schema ({
  skill: String
});

const Skills = mongoose.model("Skills", skillsSchema);

module.exports = Skills;
