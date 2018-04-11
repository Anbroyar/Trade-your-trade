const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const WORK_FACTOR = 10;

const UserSchema = new Schema ({
  username:{
    type: String,
    trim: true,
    required: true,
    index: { unique: true}
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type:String,
    trim: true//,
    // required: true,
  },
  lastname: {
    type:String,
    trim: true//,
    // required: true,
  },
  email: {
    type: String,
    // unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  userphoto: {
    type: String
  },
  phonenumber:{
    type: String,
    // unique: true,
    // required: true,
    trim: true
  },
  zipcode: {
    type: Number//,
    // required: true
  },
  skills: {
    type: [{type: Schema.Types.ObjectId, ref: 'Skill'}],  // might need to be ref: 'Skills'
    validate: {
      validator: function(value){
        return value.length <= 3;
      }
    }
  }
});

// This pre "save" handler will be called before each time the user is saved.
// it will convert the plaintext password into a securely hashed version so that
// the original plaintext password is never stored in the database

// NOTE: do NOT use an arrow function for the second argument
// Mongoose passes in the instance being saved via "this",
// but arrow functions preserve "this" as the bound context
// if you use an arrow function, you'll get an error
// "user.isModified is not a function"
UserSchema.pre('save', function(next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      // let mongoose know we're done now that we've hashed the plaintext password
      next();
    });
  });
});
UserSchema.methods.validatePassword = function (candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return reject(err);
      resolve(isMatch);
    });
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

User.seeds = (skills) => {
  return User.create([
    {
      firstname: 'Zero',
      lastname: 'Zoe',
      skills: [],
      password: 'test',
      username: 'zoe'
    },
    {
      firstname: 'Dennis',
      lastname: 'Developer',
      skills: [skills.Developer],
      password: 'test',
      username :'developer'
    },
    {
      firstname: 'DJ',
      lastname: 'Dan',
      skills : [
        skills.DJ,
        skills.Musician,
        skills.Developer
      ],
      password: 'test',
      username: 'dj'
    }
  ]).then(users => {
    let usersNameToCreatedObject = {};
    for(user of users) {
      usersNameToCreatedObject[user.username] = user;
    }
    return Object.assign(users, usersNameToCreatedObject);
  })
};
