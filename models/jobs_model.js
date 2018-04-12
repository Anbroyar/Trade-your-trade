const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobsSchema = new Schema ({
  jobName: {
    type: String,
    required: true
  },
  jobType: {
    type: Schema.Types.ObjectId,
    ref: 'Skills',
    required: true
  },
  totalHours: {
    type: Number
  },
  totalCost: {
    type: Number
  },
  userRequested: {
    type: Schema.Types.ObjectId,
    ref: 'User.username',
    // required: true
  },
  userAssigned: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
  dateCompleted: {
    type: Date,
  }
});

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Jobs;

Jobs.seeds = (users, skills) => {
  console.log(users);
  return Jobs.create([
    {
      jobName: 'DJing at a Teachers House, I will tutor your kids',
      jobType: skills.DJ,
      userRequested: users.zoe,
      totalHours: 2,
      totalCost: 12
    },
    {
      jobName: 'Develop the next facebook',
      jobType: skills.Developer,
      userRequested: users.zoe,
      totalHours: 10e100,
      totalCost: 0
    }
  ])
}
