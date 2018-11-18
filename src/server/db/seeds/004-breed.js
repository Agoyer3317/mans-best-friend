exports.seed = function(knex, Promise) {
    return knex('breed')
        .del()
        .then(function() {
            return knex('breed').insert([
                {
                    breed: 'flame point siamese'
                },
                {
                    breed: 'weimaraner'
                }
            ]);
        });
};
