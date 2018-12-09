const router = require('express').Router();
const HabitLog = require('../../db/models/HabitLog');

// Find all Authors and return them to the user with res.json
// GET /api/habitlog

router.get('/', function(req, res) {
    // Query the User table in the database
    HabitLog.query().then((data) => {
        // Return the habitlog
        // as the response
        res.json(data);
    });
});

// GET /api/habitlog
//:id
router.get('/:id', function(req, res) {
    HabitLog.query()
        .where('id', req.params.id)
        .then((data) => res.json(data));
});

// POST /api/habitlog

router.post('/', function(req, res) {
    HabitLog.query()
        .insert(req.body)
        .then((data) => res.json(data));
});

// PATCH /api/habitlog
//:id
router.patch('/:id', function(req, res) {
    HabitLog.query()
        .patchAndFetchById(req.params.id, req.body)
        .then((data) => res.json(data));
});

// DELETE /api/habitlog
//:id
router.delete('/:id', function(req, res) {
    HabitLog.query()
        .deleteById(req.params.id)
        .then((numDeleted) => res.json({ numberOfRowsDeleted: numDeleted }));
});

module.exports = router;
