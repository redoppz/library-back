import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { DatabaseModule } from '../database.module';
import { BooksController } from './controllers/books.controller';
import { Book } from './entities/books.entities';
import { BooksService } from './services/books.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [
    BooksService,
    {
      provide: 'BOOKS_REPOSITORY',
      useFactory: (conn: Connection) => conn.getRepository(Book),
      inject: ['DATABASE_CONNECTION'],
    },
  ],
})
export class BooksModule {}
