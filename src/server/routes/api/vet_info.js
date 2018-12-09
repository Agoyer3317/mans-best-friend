const router = require('express').Router();
const VetInfo = require('../../db/models/VetInfo');

// Find all Authors and return them to the user with res.json
// GET /api/VetInfo
router.get('/', function(req, res) {
    // Query the User table in the database
    VetInfo.query().then((data) => {
        // Return the VetInfo as the response
        res.json(data);
    });
});

// GET /api/VetInfo/:id
router.get('/:id', function(req, res) {
    VetInfo.query()
        .where('id', req.params.id)
        .then((data) => res.json(data));
});

// POST /api/VetInfo
router.post('/', function(req, res) {
    VetInfo.query()
        .insert(req.body)
        .then((data) => res.json(data));
});

// PATCH /api/VetInfo/:id
router.patch('/:id', function(req, res) {
    VetInfo.query()
        .patchAndFetchById(req.params.id, req.body)
        .then((data) => res.json(data));
});

// DELETE /api/VetInfo/:id
router.delete('/:id', function(req, res) {
    VetInfo.query()
        .deleteById(req.params.id)
        .then((numDeleted) => res.json({ numberOfRowsDeleted: numDeleted }));
});

module.exports = router;
