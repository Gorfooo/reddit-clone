import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('motivo_denuncia', (table: Knex.TableBuilder) => {
    table.increments('id_motivo').primary();
    table.string('descricao').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('motivo_denuncia');
}
