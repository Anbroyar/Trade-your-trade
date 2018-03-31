const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username:{
    type: String,
    trim: true,
    required: true,
    unique: { index:{unique: true} }
  },
  firstname: {
    type:String,
    trim: true,
    required: true,
  },
  lastname: {
    type:String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  phonenumber:{
    type: String,
    unique: true,
    required: true,
    trim: true
  }

  zipcode: {
    type: string,
  },

  skill1: {
    type: string,
  },

  skill2: {
    type: string,
  },

  skill3: {
    type: string,
  },

});

const User = mongoose.model("User", userSchema);

module.exports = User;
