const { Model } = require('objection');

class HabitLog extends Model {
    static get tableName() {
        return 'habit_log';
    }

    static get idColumn() {
        return 'id';
    }
}

module.exports = HabitLog;
