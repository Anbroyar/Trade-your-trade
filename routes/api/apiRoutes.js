const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../../models');
const mustBeLoggedIn = require('../mustBeLoggedIn');

function user2json(user) {
  return {
    firstname: user.firstname,
    lastname: user.lastname,
    phonenumber: user.phonenumber,
    userphoto: user.userphoto,
    skills: user.skills,
    email: user.emails,
  }
}

function getCurrentUser(req, res) {
  const { id, username } = req.user;
  console.log("Logged in as ", username);
  db.User.findById(id).then(user => {
    const userJSON = user2json(user);
    res.json({
      userJSON,
      id,
      username
    });
  })
}

router.route('/auth')
  // GET to /api/auth will return current logged in user info
  .get((req, res) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'You are not currently logged in.'
      })
    }

    getCurrentUser(req, res);
  })
  // POST to /api/auth with username and password will authenticate the user
  .post(passport.authenticate('local'), (req, res) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'Invalid username or password.'
      })
    }

    getCurrentUser(req, res);
  })
  // DELETE to /api/auth will log the user out
  .delete((req, res) => {
    req.logout();
    req.session.destroy();
    res.json({
      message: 'You have been logged out.'
    });
  });

router.route('/users')
  // POST to /api/users will create a new user
  .post((req, res, next) => {
    db.User.create(req.body)
      .then(user => {
        const { _id, username } = user;
        res.json({
          id: _id, 
          username
        });
      })
      .catch(err => {
        // if this error code is thrown, that means the username already exists.
        // redirecting users back to the create screen
        // with that flash message
        if (err.code === 11000) {
          res.status(400).json({
            message: 'Username already in use.'
          })
        }

        // unexpected error, so we'll just send it off 
        // to the next middleware to handle the error.
        next(err);
      });
  })
  .put((req, res) => {
    const {id} = req.user;
    db.User.findById(id)
      .then(user => {
        user.set(req.body);
        return user.save();
      })
      .then(user => res.json(user2json(user)))
      .catch(error => res.status(400).json(error))
  })


module.exports = router;
