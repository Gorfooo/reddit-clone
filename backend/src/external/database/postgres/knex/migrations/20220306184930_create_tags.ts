import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('tags', (table: Knex.TableBuilder) => {
    table.increments('idTag').primary();
    table.string('descricao', 30).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('tags');
}
