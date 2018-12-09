const { Model } = require('objection');

class Breed extends Model {
    static get tableName() {
        return 'breed';
    }

    static get idColumn() {
        return 'id';
    }
}

module.exports = Breed;
