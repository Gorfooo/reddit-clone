import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('usuario', (table: Knex.TableBuilder) => {
    table.increments('id_usuario').primary();
    table.string('nome').notNullable();
    table.string('banner').nullable();
    table.string('email').notNullable().unique();
    table.string('foto').nullable();
    table.string('esconder_online').notNullable().defaultTo('N');
    table.string('sobre').nullable();
    table.integer('karma').notNullable().defaultTo(0);
    table.string('senha').notNullable();
    table.date('nascimento').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('usuario');
}
