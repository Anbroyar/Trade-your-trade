const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const jobsRoute = require('./jobsRoute');
const userRoute = require('./userRoute');
const skillsRoute = require('./skillsRoute');

router.use('/api', apiRoutes);
// router.use('/jobs', jobsRoute);
// router.use('/profile', userRoute);
// router.use('/skills', skillsRoute);

module.exports = router;