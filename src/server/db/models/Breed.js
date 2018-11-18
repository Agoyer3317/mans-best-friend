const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'species';
    }

    static get idColumn() {
        return 'id';
    }
}

module.exports = Species;
