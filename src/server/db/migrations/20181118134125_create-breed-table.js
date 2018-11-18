exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('breed').then(
            (exists) =>
                !exists &&
                knex.schema.createTable('breed', (table) => {
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
    return Promise.all([knex.schema.dropTableIfExists('breed')]);
};
