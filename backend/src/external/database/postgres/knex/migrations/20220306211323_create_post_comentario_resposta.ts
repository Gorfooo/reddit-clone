import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    'postComentarioResposta',
    (table: Knex.TableBuilder) => {
      table.increments('idResposta').primary();
      table
        .bigInteger('idComentario')
        .notNullable()
        .references('idComentario')
        .inTable('postComentario');
      table
        .bigInteger('idUsuario')
        .notNullable()
        .references('idUsuario')
        .inTable('usuario');
      table.text('resposta').nullable();
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('postComentarioResposta');
}
