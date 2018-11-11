exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('sub_species').then(
            (exists) =>
                !exists &&
                knex.schema.createTable('sub_species', (table) => {
                    table.increments('id').primary();

                    // Timestamps
                    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
                    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

                    // General Information
                    table.string('breed', 255).notNullable();
                })
        )
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTableIfExists('sub_species')]);
};
