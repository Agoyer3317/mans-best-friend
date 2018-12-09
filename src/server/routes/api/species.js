const router = require('express').Router();
const Species = require('../../db/models/Species');

// Find all Authors and return them to the user with res.json
// GET /api/species
router.get('/', function(req, res) {
    // Query the User table in the database
    Species.query().then((data) => {
        // Return the species as the response
        res.json(data);
    });
});

// GET /api/species/:id
router.get('/:id', function(req, res) {
    Species.query()
        .where('id', req.params.id)
        .then((data) => res.json(data));
});

// POST /api/species
router.post('/', function(req, res) {
    Species.query()
        .insert(req.body)
        .then((data) => res.json(data));
});

// PATCH /api/species/:id
router.patch('/:id', function(req, res) {
    Species.query()
        .patchAndFetchById(req.params.id, req.body)
        .then((data) => res.json(data));
});

// DELETE /api/species/:id
router.delete('/:id', function(req, res) {
    Species.query()
        .deleteById(req.params.id)
        .then((numDeleted) => res.json({ numberOfRowsDeleted: numDeleted }));
});

module.exports = router;
