const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'vet_info';
    }

    static get idColumn() {
        return 'id';
    }
}

module.exports = VetInfo;
