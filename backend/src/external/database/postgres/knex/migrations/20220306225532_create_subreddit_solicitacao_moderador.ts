import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('solicitacao_moderador', (table: Knex.TableBuilder) => {
    table.increments('id_solicitacao_moderador').primary();
    table
      .bigInteger('id_subreddit')
      .notNullable()
      .references('id_subreddit')
      .inTable('subreddit');
    table
      .bigInteger('id_usuario')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table.text('solicitacao').notNullable();
    table.string('aceito', 1).nullable();
    table.text('motivo_recusa').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('solicitacao_moderador');
}
