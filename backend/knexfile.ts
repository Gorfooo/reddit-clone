import db_config from './src/external/database/postgres/config';

export default {
  development: {
    client: 'postgresql',
    connection: {
      host: db_config.HOST,
      database: db_config.DB,
      user: db_config.USER,
      password: db_config.PASSWORD,
      port: Number(db_config.PORT),
    },
    migrations: {
      directory: 'src/external/database/postgres/knex/migrations',
    },
  },
};
