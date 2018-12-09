const { Model } = require('objection');

class VetInfo extends Model {
    static get tableName() {
        return 'vet_info';
    }

    static get idColumn() {
        return 'id';
    }
}

module.exports = VetInfo;
