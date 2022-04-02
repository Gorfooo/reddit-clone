import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('postTags', (table: Knex.TableBuilder) => {
    table
      .bigInteger('idPost')
      .notNullable()
      .references('idPost')
      .inTable('post');
    table.bigInteger('idTag').notNullable().references('idTag').inTable('tags');
    table.primary(['idPost', 'idTag']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('postTags');
}
