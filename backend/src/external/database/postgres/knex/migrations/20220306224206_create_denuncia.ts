import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('denuncia', (table: Knex.TableBuilder) => {
    table.increments('idDenuncia').primary();
    table
      .bigInteger('idMotivo')
      .nullable()
      .references('idMotivo')
      .inTable('motivoDenuncia');
    table
      .bigInteger('idUsuarioDenunciador')
      .notNullable()
      .references('idUsuario')
      .inTable('usuario');
    table
      .bigInteger('idUsuarioDenunciado')
      .nullable()
      .references('idUsuario')
      .inTable('usuario');
    table.bigInteger('idPost').nullable().references('idPost').inTable('post');
    table
      .bigInteger('idSubreddit')
      .nullable()
      .references('idSubreddit')
      .inTable('subreddit');
    table.string('obs', 200).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('denuncia');
}
