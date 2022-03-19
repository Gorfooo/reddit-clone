import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('post_comentario_resposta', (table: Knex.TableBuilder) => {
    table.increments('id_resposta').primary();
    table
      .bigInteger('id_comentario')
      .notNullable()
      .references('id_comentario')
      .inTable('post_comentario');
    table
      .bigInteger('id_usuario')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table.text('resposta').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('post_comentario_resposta');
}
