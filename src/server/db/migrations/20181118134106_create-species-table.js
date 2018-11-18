exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('species').then(
            (exists) =>
                !exists &&
                knex.schema.createTable('species', (table) => {
                    table.increments('id').primary();

                    // Timestamps
                    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
                    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

                    // General Information
                    table.string('class', 255).notNullable();
                })
        )
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTableIfExists('species')]);
};
