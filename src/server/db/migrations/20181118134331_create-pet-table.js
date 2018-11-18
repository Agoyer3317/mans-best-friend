exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('pet').then(
            // If the table does not currently exist
            // Then create the table with the specified properties
            (exists) =>
                !exists &&
                knex.schema.createTable('pet', (table) => {
                    table.increments('id').primary();

                    // Timestamps
                    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
                    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

                    // General Information
                    // Name
                    table.string('name').notNullable();

                    // Date of Birth
                    table.date('date_of_birth');

                    // Weight
                    table.integer('weight', 100).unsigned();

                    // Bio
                    table.text('bio', 'mediumtext');

                    // Link to Photo
                    table.text('photo_url', 'longtext');

                    // Foreign Keys
                    table
                        .integer('owner_id')
                        // No negative numbers
                        .unsigned()
                        .notNullable();

                    table
                        .integer('species_id')
                        .unsigned()
                        .notNullable();

                    table
                        .integer('sub_species_id')
                        .unsigned()
                        .notNullable();

                    table
                        .integer('breed_id')
                        .unsigned()
                        .notNullable();

                    table
                        .foreign('owner_id')
                        .references('id')
                        .inTable('user');

                    table
                        .foreign('species_id')
                        .references('id')
                        .inTable('species');

                    table
                        .foreign('sub_species_id')
                        .references('id')
                        .inTable('sub_species');

                    table
                        .foreign('breed_id')
                        .references('id')
                        .inTable('breed');
                })
        )
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTableIfExists('pet')]);
};
