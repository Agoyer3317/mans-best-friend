exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('user').then(
            (exists) =>
                !exists &&
                knex.schema.createTable('user', (table) => {
                    // ID (primary key)
                    table.increments('id').primary();

                    // Timestamps
                    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
                    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

                    // General Information
                    table.string('email', 255).notNullable();
                    table.string('username', 255).notNullable();
                    table.string('first_name', 255).notNullable();
                    table.string('last_name', 255).notNullable();
                })
        )
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTableIfExists('user')]);
};
