const router = require('express').Router();
const Pet = require('../../db/models/Pet');

// Find all Authors and return them to the user with res.json
// GET /api/pets
router.get('/', function(req, res) {
    // Query the User table in the database
    Pet.query()
        .eager('[owner, species, subspecies, breed]')
        .then((data) => {
            // Return the pet as the response
            res.json(data);
        });
});

// GET /api/pets/:id
router.get('/:id', function(req, res) {
    Pet.query()
        .findById(req.params.id)
        .eager('[owner, species, subspecies, breed]')
        .then((data) => res.json(data));
});

// POST /api/pets
router.post('/', function(req, res) {
    Pet.query()
        .insert(req.body)
        .then((data) => res.json(data));
});

// PATCH /api/pets/:id
router.patch('/:id', function(req, res) {
    Pet.query()
        .patchAndFetchById(req.params.id, req.body)
        .eager('[owner, species, subspecies, breed]')
        .then((data) => res.json(data));
});

// DELETE /api/pets/:id
router.delete('/:id', function(req, res) {
    Pet.query()
        .deleteById(req.params.id)
        .then((numDeleted) => res.json({ numberOfRowsDeleted: numDeleted }));
});

module.exports = router;
