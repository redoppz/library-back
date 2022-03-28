import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateBookQueryDto } from '../dto/createBookQuery.dto';
import { UpdateBookQueryDto } from '../dto/updateBookQuery.dto';
import { Book } from '../entities/books.entities';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOKS_REPOSITORY')
    private booksRepository: Repository<Book>
  ) {}

  async getBooks() {
    return this.booksRepository.find();
  }

  async getBook(id: string) {
    return this.booksRepository.findOne(id);
  }

  async createBook(createBookQueryDto: CreateBookQueryDto) {
    console.log(createBookQueryDto);
    const book = this.booksRepository.create({
      title: createBookQueryDto.title,
      author: createBookQueryDto.author
    });

    return this.booksRepository.save(book);
  }

  async updateBook(id: string, updateBookQueryDto: UpdateBookQueryDto) {
    const book = await this.booksRepository.findOne(id);
    Object.assign(book, updateBookQueryDto);
    return this.booksRepository.save(book);
  }

  async deleteBook(id: string) {
    return this.booksRepository.delete(id);
  }
}
