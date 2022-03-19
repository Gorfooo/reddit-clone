import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('post_acoes', (table: Knex.TableBuilder) => {
    table.increments('id_post_acao').primary();
    table
      .bigInteger('id_post')
      .notNullable()
      .references('id_post')
      .inTable('post');
    table
      .bigInteger('id_usuario')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table.string('compartilhado', 1).nullable();
    table.string('ocultado', 1).nullable();
    table.string('guardado', 1).nullable();
    table.string('premiado', 1).nullable();
    table.string('like_dislike', 1).nullable();
    table.date('like_dislike_date').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('post_acoes');
}
