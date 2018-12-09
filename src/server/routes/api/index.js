const router = require('express').Router();

// Import the API routes
const user = require('./user');
const breed = require('./breed');
const habitLog = require('./habit_log');
const pet = require('./pet');
const species = require('./species');
const subSpecies = require('./sub_species');
const vetInfo = require('./vet_info');

// Mount the `users` router to the `/users` path
router.use('/users', user);
router.use('/breed', breed);
router.use('/habit_log', habitLog);
router.use('/pet', pet);
router.use('/species', species);
router.use('/sub_species', subSpecies);
router.use('/vet_info', vetInfo);

module.exports = router;
