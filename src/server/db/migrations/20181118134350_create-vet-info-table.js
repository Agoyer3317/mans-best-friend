exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('vet_info').then(
            (exists) =>
                !exists &&
                knex.schema.createTable('vet_info', (table) => {
                    table.increments('id').primary();

                    // General Information
                    table.string('vet_info', 255).notNullable();

                    // Create `pet_id` column
                    table
                        .integer('pet_id')
                        .unsigned()
                        .notNullable();

                    table
                        .foreign('pet_id')
                        .references('id')
                        .inTable('pet');
                })
        )
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTableIfExists('vet_info')]);
};
