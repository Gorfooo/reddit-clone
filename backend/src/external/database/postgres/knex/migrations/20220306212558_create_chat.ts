import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('chat', (table: Knex.TableBuilder) => {
    table.increments('idMensagem').primary();
    table
      .bigInteger('idLeitor')
      .notNullable()
      .references('idUsuario')
      .inTable('usuario');
    table
      .bigInteger('idEscritor')
      .notNullable()
      .references('idUsuario')
      .inTable('usuario');
    table.dateTime('dataHora').notNullable();
    table.text('mensagem').notNullable();
    table.string('lido', 1).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('chat');
}
