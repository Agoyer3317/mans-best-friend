const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'habit_log';
    }

    static get idColumn() {
        return 'id';
    }
}

module.exports = HabitLog;
