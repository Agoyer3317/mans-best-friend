const router = require('express').Router();

// Import the `users` router
const user = require('./user');

// Mount the `users` router to the `/users` path
router.use('/users', user);

module.exports = router;
