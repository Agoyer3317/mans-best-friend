exports.seed = function(knex, Promise) {
    return knex('pet')
        .del()
        .then(function() {
            return knex('pet').insert([
                {
                    name: 'Oogie',
                    date_of_birth: '1/1/2018',
                    weight: 15,
                    bio: 'n/a',
                    photo_url: 'n/a',
                    owner_id: 1,
                    species_id: 1,
                    sub_species_id: 1,
                    breed_id: 1
                },
                {
                    name: 'Luna',
                    date_of_birth: '4-1-17',
                    weight: 43,
                    bio: 'n/a',
                    photo_url: 'n/a',
                    owner_id: 2,
                    species_id: 1,
                    sub_species_id: 2,
                    breed_id: 2
                }
            ]);
        });
};
