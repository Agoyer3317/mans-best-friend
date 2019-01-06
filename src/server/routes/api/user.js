const router = require('express').Router();
const User = require('../../db/models/User');

// Find all Authors and return them to the user with res.json
// GET /api/users
router.get('/', function(req, res) {
    // Query the User table in the database
    User.query()
        .eager('[pets]')
        .then((data) => {
            // Return the users as the response
            res.json(data);
        });
});

// GET /api/users/:id
router.get('/:id', function(req, res) {
    User.query()
        .findById(req.params.id)
        .eager('[pets]')
        .then((data) => res.json(data));
});

// POST /api/users
router.post('/', function(req, res) {
    User.query()
        .insert(req.body)
        .then((data) => res.json(data));
});

// PATCH /api/users/:id
router.patch('/:id', function(req, res) {
    User.query()
        .patchAndFetchById(req.params.id, req.body)
        .then((data) => res.json(data));
});

// DELETE /api/users/:id
router.delete('/:id', function(req, res) {
    User.query()
        .deleteById(req.params.id)
        .then((numDeleted) => res.json({ numberOfRowsDeleted: numDeleted }));
});

module.exports = router;
