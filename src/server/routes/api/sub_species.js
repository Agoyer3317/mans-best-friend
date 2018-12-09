const router = require('express').Router();
const SubSpecies = require('../../db/models/SubSpecies');

// Find all Authors and return them to the user with res.json
// GET /api/subspecies
router.get('/', function(req, res) {
    // Query the User table in the database
    SubSpecies.query().then((data) => {
        // Return the subspecies as the response
        res.json(data);
    });
});

// GET /api/subspecies/:id
router.get('/:id', function(req, res) {
    SubSpecies.query()
        .where('id', req.params.id)
        .then((data) => res.json(data));
});

// POST /api/subspecies
router.post('/', function(req, res) {
    SubSpecies.query()
        .insert(req.body)
        .then((data) => res.json(data));
});

// PATCH /api/subspecies/:id
router.patch('/:id', function(req, res) {
    SubSpecies.query()
        .patchAndFetchById(req.params.id, req.body)
        .then((data) => res.json(data));
});

// DELETE /api/subspecies/:id
router.delete('/:id', function(req, res) {
    SubSpecies.query()
        .deleteById(req.params.id)
        .then((numDeleted) => res.json({ numberOfRowsDeleted: numDeleted }));
});

module.exports = router;
