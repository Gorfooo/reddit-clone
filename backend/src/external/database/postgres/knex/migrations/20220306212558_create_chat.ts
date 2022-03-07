import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('chat', (table: Knex.TableBuilder) => {
    table.increments('id_mensagem').primary();
    table
      .bigInteger('id_leitor')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table
      .bigInteger('id_escritor')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table.dateTime('data_hora').notNullable();
    table.string('mensagem').notNullable();
    table.string('lido').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('chat');
}
