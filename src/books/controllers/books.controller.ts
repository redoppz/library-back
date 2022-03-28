import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateBookQueryDto } from '../dto/createBookQuery.dto';
import { UpdateBookQueryDto } from '../dto/updateBookQuery.dto';
import { BooksService } from '../services/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  @Get('/:id')
  getBookById(@Query('id') id: string) {
    return this.booksService.getBook(id);
  }

  @Post()
  createBook(@Body() createBookQueryDto: CreateBookQueryDto) {
    return this.booksService.createBook(createBookQueryDto);
  }

  @Put('/:id')
  updateBook(
    @Query('id') id: string,
    @Body() updateBookQueryDto: UpdateBookQueryDto,
  ) {
    return this.booksService.updateBook(id, updateBookQueryDto);
  }

  @Delete('/:id')
  deleteBook(@Query('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
