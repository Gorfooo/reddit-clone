import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('tags').del();

  await knex('tags').insert([
    { descricao: 'NSFW' },
    { descricao: 'Games' },
    { descricao: 'Humor' },
    { descricao: 'Diversos' },
    { descricao: 'Esportes' },
    { descricao: 'Notícias' },
    { descricao: 'Natureza' },
  ]);
}
