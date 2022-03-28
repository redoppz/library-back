import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBookQueryDto } from '../dto/createBookQuery.dto';
import { UpdateBookQueryDto } from '../dto/updateBookQuery.dto';
import { Book } from '../entities/books.entities';
import { BooksService } from '../services/books.service';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({ status: 200, type: [Book] })
  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  @ApiOperation({ summary: 'Get book by id' })
  @ApiResponse({ status: 200, type: Book })
  @Get('/:id')
  getBookById(@Query('id') id: string) {
    return this.booksService.getBook(id);
  }

  @ApiOperation({ summary: 'Create a book' })
  @ApiResponse({ status: 201, type: Book })
  @Post()
  createBook(@Body() createBookQueryDto: CreateBookQueryDto) {
    return this.booksService.createBook(createBookQueryDto);
  }

  @ApiOperation({ summary: 'Update a book by id' })
  @ApiResponse({ status: 200, type: Book })
  @Put('/:id')
  updateBook(@Query('id') id: string, @Body() updateBookQueryDto: UpdateBookQueryDto) {
    return this.booksService.updateBook(id, updateBookQueryDto);
  }

  @ApiOperation({ summary: 'Delete a book' })
  @ApiResponse({ status: 204, type: String })
  @Delete('/:id')
  deleteBook(@Query('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
