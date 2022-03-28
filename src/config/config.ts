import * as dotenv from 'dotenv';

dotenv.config({
  path: process.env.ENV_FILE,
});

export const config = {
  logLevel: 'info',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
