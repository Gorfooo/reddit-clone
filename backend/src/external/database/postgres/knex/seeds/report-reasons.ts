import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('motivoDenuncia').del();

  await knex('motivoDenuncia').insert([
    { descricao: 'Viola as regras dessa comunidade' },
    { descricao: 'Assédio' },
    { descricao: 'Ameaça de violência' },
    { descricao: 'Ódio' },
    { descricao: 'Sexualização de menores de idade' },
    { descricao: 'Compartilhamento de informações pessoais' },
    { descricao: 'Pornografia involuntária' },
    { descricao: 'Transações proibidas' },
    { descricao: 'Falsidade ideológica' },
    { descricao: 'Violação de direitos autorais' },
    { descricao: 'Automutilação ou suicídio' },
    { descricao: 'Spam' },
    { descricao: 'Desinformação' },
  ]);
}
