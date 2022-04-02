import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    'motivoDenuncia',
    (table: Knex.TableBuilder) => {
      table.increments('idMotivo').primary();
      table.string('descricao', 40).notNullable();
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('motivoDenuncia');
}
