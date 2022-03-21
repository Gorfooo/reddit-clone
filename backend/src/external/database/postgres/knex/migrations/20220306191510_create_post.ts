import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('post', (table: Knex.TableBuilder) => {
    table.increments('id_post').primary();
    table
      .bigInteger('id_usuario')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table.string('conteudo', 150).notNullable();
    table.string('titulo', 150).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('post');
}
