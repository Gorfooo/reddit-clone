import dbConfig from './src/external/database/postgres/config';

export default {
  development: {
    client: 'postgresql',
    connection: {
      host: dbConfig.HOST,
      database: dbConfig.DB,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      port: Number(dbConfig.PORT),
    },
    migrations: {
      directory: 'src/external/database/postgres/knex/migrations',
    },
    seeds: {
      directory: 'src/external/database/postgres/knex/seeds',
    },
  },
};
