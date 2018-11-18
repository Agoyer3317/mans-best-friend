exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('habit_log').then(
            (exists) =>
                !exists &&
                knex.schema.createTable('habit_log', (table) => {
                    // ID (primary key)
                    table.increments('id').primary();

                    // Timestamps
                    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
                    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

                    // Habit Text
                    table.text('habit_text', 'longtext');

                    // Create `pet_id` column
                    table
                        .integer('pet_id')
                        .unsigned()
                        .notNullable();

                    // Foreign key pet_id is suppose reference the id column in the pet-info-table
                    table
                        .foreign('pet_id')
                        .references('id')
                        .inTable('pet');
                })
        )
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTableIfExists('habit_log')]);
};
