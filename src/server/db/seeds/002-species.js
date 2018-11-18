exports.seed = function(knex, Promise) {
    return knex('species')
        .del()
        .then(function() {
            return knex('species').insert([
                {
                    class: 'mammal'
                }
            ]);
        });
};
