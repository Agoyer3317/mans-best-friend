exports.seed = function(knex, Promise) {
    return knex('user')
        .del()
        .then(function() {
            return knex('user').insert([
                {
                    email: 'chris@test.com',
                    first_name: 'Chris',
                    last_name: 'Aguilar'
                },
                {
                    email: 'allison@test.com',
                    first_name: 'Allison',
                    last_name: 'Goyer'
                }
            ]);
        });
};
