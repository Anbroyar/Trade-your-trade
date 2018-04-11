const Skills = require('./skills_model');
const Users = require('./user_model');
const Jobs = require('./jobs_model');
require('./connection');

Skills
  .seeds()
  .then(skills => {
    return Users.seeds(skills)
      .then(users => {
        return Jobs.seeds(users, skills)
      })
  })
  .then(() => console.log('Done seeding!'))
  .catch((error) => {
    console.log('Error seeding!', error);
  })
  .then(() => process.exit(0))
