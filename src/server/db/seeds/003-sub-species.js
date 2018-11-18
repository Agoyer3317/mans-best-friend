exports.seed = function(knex, Promise) {
    return knex('sub_species')
        .del()
        .then(function() {
            return knex('sub_species').insert([
                {
                    type: 'cat'
                },
                {
                    type: 'dog'
                }
            ]);
        });
};
