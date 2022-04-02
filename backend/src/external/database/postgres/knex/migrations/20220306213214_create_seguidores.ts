import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('seguidores', (table: Knex.TableBuilder) => {
    table
      .bigInteger('idSeguidor')
      .notNullable()
      .references('idUsuario')
      .inTable('usuario');
    table
      .bigInteger('idSeguido')
      .notNullable()
      .references('idUsuario')
      .inTable('usuario');
    table.primary(['idSeguidor', 'idSeguido']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('seguidores');
}
