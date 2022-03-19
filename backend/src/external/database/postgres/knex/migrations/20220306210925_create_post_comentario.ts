import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('post_comentario', (table: Knex.TableBuilder) => {
    table.increments('id_comentario').primary();
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
    table.text('comentario').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('post_comentario');
}
