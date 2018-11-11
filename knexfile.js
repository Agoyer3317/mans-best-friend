module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: '3306',
            database: 'mans_best_friend_dev',
            user: 'root',
            password: 'root'
        },
        migrations: {
            directory: './src/server/db/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './src/server/db/seeds'
        }
    },
    production: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: '3306',
            database: 'mans_best_friend_prod',
            user: 'root',
            password: 'root'
        },
        migrations: {
            directory: './src/server/db/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: '.src/server/db/seeds'
        }
    }
};
