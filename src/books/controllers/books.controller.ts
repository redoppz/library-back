import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CreateBookQueryDto } from '../dto/createBookQuery.dto';
import { GetBooksQueryDto } from '../dto/getBooksQuery.dto';
import { UpdateBookQueryDto } from '../dto/updateBookQuery.dto';
import { BooksService } from '../services/books.service';

@Controller('/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(getBooksQueryDto: GetBooksQueryDto) {
    return this.booksService.getBooks(getBooksQueryDto);
  }

  @Get('/:id')
  getBookById(@Query('id') id: string) {
    return this.booksService.getBook(id);
  }

  @Post()
  createBook(createBookQueryDto: CreateBookQueryDto) {
    return this.booksService.createBook(createBookQueryDto);
  }

  @Put('/:id')
  updateBook(@Query('id') id: string, updateBookQueryDto: UpdateBookQueryDto) {
    return this.booksService.updateBook(id, updateBookQueryDto);
  }

  @Delete('/:id')
  deleteBook(@Query('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
