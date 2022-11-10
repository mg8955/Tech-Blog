const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const signupRoutes = require('./signupRoutes');

router.use('/signup', signupRoutes);
router.use('/dashboard', userRoutes);
router.use('/posts', blogRoutes);

module.exports = router;
