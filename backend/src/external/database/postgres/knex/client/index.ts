import knex from 'knex';
import * as config from '../../../../../../knexfile';

const knexClient = knex(config.default.development);

export { knexClient };
