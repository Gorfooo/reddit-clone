import { config } from 'dotenv';
config();

const db_config = {
  HOST:process.env.DB_HOST,
  PORT:process.env.DB_PORT,
  USER:process.env.DB_USER,
  PASSWORD:process.env.DB_PASSWORD,
  DB:process.env.DB_DATABASE_NAME,
};

export default db_config;
