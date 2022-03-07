import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('post_premiado', (table: Knex.TableBuilder) => {
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
    table.primary(['id_post', 'id_usuario']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('post_premiado');
}
