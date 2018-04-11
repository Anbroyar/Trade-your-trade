const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skillsSchema = new Schema ({
  name: {
    type: String,
    index: true
  }
});

const Skills = mongoose.model("Skill", skillsSchema);

module.exports = Skills;

Skills.seeds = () => {
  return Skills.create([
    {name: 'DJ'},
    {name: 'Carpenter'},
    {name: 'Developer'},
    {name: 'Designer'},
    {name: 'Babysitter'},
    {name: 'Accountant'},
    {name: 'Architect'},
    {name: 'Photographer'},
    {name: 'Plumber'},
    {name: 'Landscaper'},
    {name: 'Musician'},
    {name: 'Cook'},
    {name: 'Hairdresser'},
    {name: 'Music Teacher'},
    {name: 'Mechanic'},
    {name: 'Nutritionist'},
    {name: 'Pet Groomer'},
    {name: 'Roofer'},
    {name: 'Tutor'},
    {name: 'Housekeeper'},
  ]).then(skillsArray => {
    let skillsNameToCreatedObject = {};
    for(skill of skillsArray) {
      skillsNameToCreatedObject[skill.name] = skill;
    }
    return Object.assign(skillsArray, skillsNameToCreatedObject);
  })
  .catch(error => console.log(error))
};
