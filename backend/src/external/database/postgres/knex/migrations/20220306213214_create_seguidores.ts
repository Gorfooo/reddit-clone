import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('seguidores', (table: Knex.TableBuilder) => {
    table
      .bigInteger('id_seguidor')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table
      .bigInteger('id_seguido')
      .notNullable()
      .references('id_usuario')
      .inTable('usuario');
    table.primary(['id_seguidor', 'id_seguido']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('seguidores');
}
