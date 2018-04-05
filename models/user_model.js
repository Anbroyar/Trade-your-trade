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
    type: String
  },
  firstname: {
    type:String,
    trim: true,
    // required: true,
  },
  lastname: {
    type:String,
    trim: true,
    // required: true,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  phonenumber:{
    type: String,
    unique: true,
    // required: true,
    trim: true
  },
  zipcode: {
    type: Number,
    // required: true
  },
  skills: {
    type: [{type: Schema.Types.ObjectId, ref: 'Skills'}],
    validate: {
      validator: function(value){
        return value.length <= 3;
      }
    }
  }
});
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
