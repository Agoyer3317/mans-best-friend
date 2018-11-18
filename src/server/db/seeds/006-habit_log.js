exports.seed = function(knex, Promise) {
    return knex('habit_log')
        .del()
        .then(function() {
            return knex('habit_log').insert([
                {
                    habit_text: 'goes potty',
                    pet_id: 01
                },
                {
                    habit_text: 'solid poop',
                    pet_id: 02
                }
            ]);
        });
};
