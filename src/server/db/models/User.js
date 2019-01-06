const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'user';
    }

    static get idColumn() {
        return 'id';
    }

    static get relationMappings() {
        const Pet = require('./Pet');

        return {
            pets: {
                relation: Model.HasManyRelation,
                modelClass: Pet,
                join: {
                    from: 'user.id',
                    to: 'pet.owner_id'
                }
            }
        };
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email', 'username', 'first_name', 'last_name'],
            properties: {
                id: { type: 'integer' },
                created_at: { type: 'string' },
                update_at: { type: 'string' },
                email: { type: 'string', minLength: 1, maxLength: 255 },
                first_name: { type: 'string', minLength: 1, maxLength: 255 },
                last_name: { type: 'string', minLength: 1, maxLength: 255 }
            }
        };
    }
}

module.exports = User;
