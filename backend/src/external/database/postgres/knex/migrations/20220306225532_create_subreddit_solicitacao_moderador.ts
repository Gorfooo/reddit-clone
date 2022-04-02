import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    'solicitacaoModerador',
    (table: Knex.TableBuilder) => {
      table.increments('idSolicitacaoModerador').primary();
      table
        .bigInteger('idSubreddit')
        .notNullable()
        .references('idSubreddit')
        .inTable('subreddit');
      table
        .bigInteger('idUsuario')
        .notNullable()
        .references('idUsuario')
        .inTable('usuario');
      table.text('solicitacao').notNullable();
      table.string('aceito', 1).nullable();
      table.text('motivoRecusa').nullable();
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('solicitacaoModerador');
}
