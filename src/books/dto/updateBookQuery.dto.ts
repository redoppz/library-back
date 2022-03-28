import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookQueryDto {
  @ApiProperty({ example: 'Book title', description: 'book title' })
  title: string;
  @ApiProperty({ example: 'Book author', description: 'book author' })
  author: string;
}
