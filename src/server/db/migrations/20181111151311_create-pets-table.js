exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('pets').then(
            // If the table does not currently exist
            // Then create the table with the specified properties
            (exists) =>
                !exists &&
                knex.schema.createTable('pets', (table) => {
                    table.increments('id').primary();

                    // Timestamps
                    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
                    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

                    // Foreign Keys
                    table
                        .integer('owner_id')
                        // No negative numbers
                        .unsigned()
                        .notNullable();

                    table
                        .foreign('owner_id')
                        .references('id')
                        .inTable('users');
                })
        )
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTableIfExists('pets')]);
};
