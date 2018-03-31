const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const offersRoute = require('./offersRoute');
const profileRoute = require('./profileRoute');
const searchRoute = require('./searchRoute');

router.use('/api', apiRoutes);
// router.use('/offers', offersRoute);
// router.use('/profile', profileRoute);
// router.use('/search', searchRoute);

module.exports = router;