import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    'subredditRegra',
    (table: Knex.TableBuilder) => {
      table.increments('idRegra').primary();
      table
        .bigInteger('idSubreddit')
        .notNullable()
        .references('idSubreddit')
        .inTable('subreddit');
      table.string('descricao', 150).notNullable();
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('subredditRegra');
}
