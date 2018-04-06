const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api/apiRoutes');
const jobsRoute = require('./api/jobsRoute');
//const userRoute = require('./api/userRoute');
const skillsRoute = require('./api/skillsRoute');

router.use('/api', apiRoutes);
router.use('/jobs', jobsRoute);
// router.use('/profile', userRoute);
router.use('/skills', skillsRoute);

module.exports = router;