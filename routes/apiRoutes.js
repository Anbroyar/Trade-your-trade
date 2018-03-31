const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../models');

function getUser(req, res) {
  const { id, username } = req.user;
  res.json({
    id, username
  });
}

router.route('/auth')
  // GET to /api/auth will return current logged in user info
  .get((req, res) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'You are not logged in.'
      })
    }

    getUser(req, res);
  })
  // POST to /api/auth with username and password will authenticate the user
  .post(passport.authenticate('local'), (req, res) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'Invalid username or password.'
      })
    }

    getUser(req, res);
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
        const { id, username } = user;
        res.json({
          id, username
        });
      })
      .catch(err => {
        if (err.code === 11000) {
          res.status(400).json({
            message: 'Username already in use.'
          })
        }
        next(err);
      });
  });
router.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
