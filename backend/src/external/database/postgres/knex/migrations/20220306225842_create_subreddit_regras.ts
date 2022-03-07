import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('subreddit_regra', (table: Knex.TableBuilder) => {
    table.increments('id_regra').primary();
    table
      .bigInteger('id_subreddit')
      .notNullable()
      .references('id_subreddit')
      .inTable('subreddit');
    table.string('descricao').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('subreddit_regra');
}
