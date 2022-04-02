import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    'subredditUsuario',
    (table: Knex.TableBuilder) => {
      table.increments('idSubredditUsuario').primary();
      table
        .bigInteger('idUsuario')
        .notNullable()
        .references('idUsuario')
        .inTable('usuario');
      table
        .bigInteger('idSubreddit')
        .notNullable()
        .references('idSubreddit')
        .inTable('subreddit');
      table.string('moderador', 1).nullable();
      table.string('criador', 1).nullable();
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('subredditUsuario');
}
