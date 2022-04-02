import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('postAcoes', (table: Knex.TableBuilder) => {
    table.increments('idPostAcao').primary();
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
    table.string('compartilhado', 1).nullable();
    table.string('ocultado', 1).nullable();
    table.string('guardado', 1).nullable();
    table.string('premiado', 1).nullable();
    table.string('likeDislike', 1).nullable();
    table.date('likeDislikeDate').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('postAcoes');
}
