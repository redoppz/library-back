import { createConnection } from 'typeorm';
import { Book } from './books/entities/books.entities';
import { config } from './config/config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
        entities: [Book],
        synchronize: true,
      }),
  },
];
