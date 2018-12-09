const router = require('express').Router();
const Breed = require('../../db/models/Breed');

// Find all Authors and return them to the user with res.json
// GET /api/breed
router.get('/', function(req, res) {
    // Query the User table in the database
    Breed.query().then((data) => {
        // Return the breed as the response
        res.json(data);
    });
});

// GET /api/breed/:id
router.get('/:id', function(req, res) {
    Breed.query()
        .where('id', req.params.id)
        .then((data) => res.json(data));
});

// POST /api/breed
router.post('/', function(req, res) {
    Breed.query()
        .insert(req.body)
        .then((data) => res.json(data));
});

// PATCH /api/breed/:id
router.patch('/:id', function(req, res) {
    Breed.query()
        .patchAndFetchById(req.params.id, req.body)
        .then((data) => res.json(data));
});

// DELETE /api/breed/:id
router.delete('/:id', function(req, res) {
    Breed.query()
        .deleteById(req.params.id)
        .then((numDeleted) => res.json({ numberOfRowsDeleted: numDeleted }));
});

module.exports = router;
