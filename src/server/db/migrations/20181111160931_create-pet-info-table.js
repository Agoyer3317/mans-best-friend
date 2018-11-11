exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('pet_info').then(
            (exists) =>
                !exists &&
                knex.schema.createTable('pet_info', (table) => {
                    table.increments('id').primary();

                    // Timestamps
                    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
                    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

                    //  -   **FK:** Species ID
                    //  -   **FK:** SubSpecies ID
                    //  -   Photo

                    //General Information
                    // DOB
                    table.date('d_o_b');

                    // Weight
                    table.integer('weight', 100).unsigned();

                    // Bio
                    table.string('bio', 255);

                    // Link to Photo
                    table.text('photo_url', 'longtext');

                    // Foreign Keys
                    // Define Column

                    // Specify as foreign key

                    // The foreign key `species_id` references the `id` column in the `species` table
                    table
                        .integer('species_id')
                        .unsigned()
                        .notNullable();

                    table
                        .integer('sub_species_id')
                        .unsigned()
                        .notNullable();

                    // Specify as foreign key

                    // The foreign key `species_id` references the `id` column in the `species` table
                    table
                        .foreign('species_id')
                        .references('id')
                        .inTable('species');

                    table
                        .foreign('sub_species_id')
                        .references('id')
                        .inTable('sub_species');
                })
        )
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTableIfExists('pet_info')]);
};
