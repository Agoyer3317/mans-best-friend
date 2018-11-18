exports.seed = function(knex, Promise) {
    return knex('vet_info')
        .del()
        .then(function() {
            return knex('vet_info').insert([
                {
                    vet_info: 'n/a',
                    pet_id: 01
                },
                {
                    vet_info: 'Shiloh Vet Clinic',
                    pet_id: 02
                }
            ]);
        });
};
