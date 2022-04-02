import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('post', (table: Knex.TableBuilder) => {
    table.increments('idPost').primary();
    table
      .bigInteger('idUsuario')
      .notNullable()
      .references('idUsuario')
      .inTable('usuario');
    table.string('conteudo', 150).notNullable();
    table.string('titulo', 150).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('post');
}
