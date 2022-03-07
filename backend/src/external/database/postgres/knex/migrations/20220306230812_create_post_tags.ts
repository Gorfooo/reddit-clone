import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('post_tags', (table: Knex.TableBuilder) => {
    table
      .bigInteger('id_post')
      .notNullable()
      .references('id_post')
      .inTable('post');
    table
      .bigInteger('id_tag')
      .notNullable()
      .references('id_tag')
      .inTable('tags');
    table.primary(['id_post', 'id_tag']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('post_tags');
}
