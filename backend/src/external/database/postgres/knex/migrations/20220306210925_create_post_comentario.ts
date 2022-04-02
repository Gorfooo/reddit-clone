import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    'postComentario',
    (table: Knex.TableBuilder) => {
      table.increments('idComentario').primary();
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
      table.text('comentario').notNullable();
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('postComentario');
}
