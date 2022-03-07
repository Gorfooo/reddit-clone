import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('subreddit', (table: Knex.TableBuilder) => {
    table.increments('id_subreddit').primary();
    table.string('sobre').nullable();
    table.string('banner').notNullable();
    table.string('nome').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('subreddit');
}
