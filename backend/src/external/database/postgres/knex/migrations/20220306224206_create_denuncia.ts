import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('denuncia', (table: Knex.TableBuilder) => {
    table.increments('id_denuncia').primary();
    table
      .bigInteger('id_motivo')
      .nullable()
      .references('id_motivo')
      .inTable('motivo_denuncia');
    table
      .bigInteger('id_usuario_denunciador')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table
      .bigInteger('id_usuario_denunciado')
      .nullable()
      .references('id_usuario')
      .inTable('usuario');
    table
      .bigInteger('id_post')
      .nullable()
      .references('id_post')
      .inTable('post');
    table
      .bigInteger('id_subreddit')
      .nullable()
      .references('id_subreddit')
      .inTable('subreddit');
    table.string('obs', 200).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('denuncia');
}
