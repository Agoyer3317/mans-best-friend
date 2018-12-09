const { Model } = require('objection');

class Pet extends Model {
    static get tableName() {
        return 'pet';
    }

    static get idColumn() {
        return 'id';
    }

    static get relationMappings() {
        const Breed = require('./Breed');
        const HabitLog = require('./HabitLog');
        const Species = require('./Species');
        const SubSpecies = require('./SubSpecies');
        const User = require('./User');
        const VetInfo = require('./VetInfo');

        return {
            owner: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'pet.owner_id',
                    to: 'user.id'
                }
            },
            species: {
                relation: Model.BelongsToOneRelation,
                modelClass: Species,
                join: {
                    from: 'pet.species_id',
                    to: 'species.id'
                }
            },
            subspecies: {
                relation: Model.BelongsToOneRelation,
                modelClass: SubSpecies,
                join: {
                    from: 'pet.subspecies_id',
                    to: 'sub_species.id'
                }
            },
            breed: {
                relation: Model.BelongsToOneRelation,
                modelClass: Breed,
                join: {
                    from: 'pet.breed_id',
                    to: 'breed.id'
                }
            },
            habit_logs: {
                relation: Model.HasManyRelation,
                modelClass: HabitLog,
                join: {
                    from: 'pet.id',
                    to: 'habit_log.pet_id'
                }
            },
            vet_info: {
                relation: Model.BelongsToOneRelation,
                modelClass: VetInfo,
                join: {
                    from: 'pet.id',
                    to: 'vet_info.pet_id'
                }
            }
        };
    }
}

module.exports = Pet;
