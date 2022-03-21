import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    'subreddit_usuario',
    (table: Knex.TableBuilder) => {
      table.increments('id_subreddit_usuario').primary();
      table
        .bigInteger('id_usuario')
        .notNullable()
        .references('id_usuario')
        .inTable('usuario');
      table
        .bigInteger('id_subreddit')
        .notNullable()
        .references('id_subreddit')
        .inTable('subreddit');
      table.string('moderador', 1).nullable();
      table.string('criador', 1).nullable();
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('subreddit_usuario');
}
