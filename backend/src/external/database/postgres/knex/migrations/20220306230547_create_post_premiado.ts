import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('postPremiado', (table: Knex.TableBuilder) => {
    table
      .bigInteger('idPost')
      .notNullable()
      .references('idPost')
      .inTable('post');
    table
      .bigInteger('idUsuario')
      .notNullable()
      .references('idUsuario')
      .inTable('usuario');
    table.primary(['idPost', 'idUsuario']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('postPremiado');
}
