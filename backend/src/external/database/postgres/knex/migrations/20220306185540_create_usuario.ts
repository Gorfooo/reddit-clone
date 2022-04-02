import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('usuario', (table: Knex.TableBuilder) => {
    table.increments('idUsuario').primary();
    table.string('nome', 40).notNullable();
    table.string('banner', 200).nullable();
    table.string('email', 100).notNullable().unique();
    table.string('avatar', 200).nullable();
    table.string('esconderOnline', 1).notNullable().defaultTo('N');
    table.string('sobre', 200).nullable();
    table.integer('karma').notNullable().defaultTo(0);
    table.string('senha', 32).notNullable();
    table.date('nascimento').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('usuario');
}
