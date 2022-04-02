import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('bloqueado', (table: Knex.TableBuilder) => {
    table
      .bigInteger('idBloqueador')
      .notNullable()
      .references('idUsuario')
      .inTable('usuario');
    table
      .bigInteger('idBloqueado')
      .notNullable()
      .references('idUsuario')
      .inTable('usuario');
    table.primary(['idBloqueador', 'idBloqueado']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('bloqueado');
}
