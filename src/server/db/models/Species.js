const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'breed';
    }

    static get idColumn() {
        return 'id';
    }
}

module.exports = Breed;
