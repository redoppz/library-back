import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'book' })
export class Book {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'book unique id' })
  id: string;

  @Column()
  @ApiProperty({ example: 'Title text', description: 'book title' })
  title: string;

  @Column()
  @ApiProperty({ example: 'Title author', description: 'book author' })
  author: string;

  @CreateDateColumn()
  @ApiProperty({ example: 'system:test', description: 'Book create datetime' })
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty({ example: 'system:test', description: 'Book update datetime' })
  updated_at: Date;
}
