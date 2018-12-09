const { Model } = require('objection');

class Species extends Model {
    static get tableName() {
        return 'species';
    }

    static get idColumn() {
        return 'id';
    }
}

module.exports = Species;
