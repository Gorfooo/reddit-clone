import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('bloqueado', (table: Knex.TableBuilder) => {
    table
      .bigInteger('id_bloqueador')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table
      .bigInteger('id_bloqueado')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table.primary(['id_bloqueador', 'id_bloqueado']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('bloqueado');
}
