const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'sub_species';
    }

    static get idColumn() {
        return 'id';
    }
}

module.exports = SubSpecies;
