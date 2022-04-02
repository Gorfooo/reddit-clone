import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('subreddit', (table: Knex.TableBuilder) => {
    table.increments('idSubreddit').primary();
    table.string('sobre', 200).nullable();
    table.string('banner', 200).notNullable();
    table.string('nome', 60).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('subreddit');
}
